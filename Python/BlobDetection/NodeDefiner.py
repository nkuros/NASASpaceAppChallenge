import cv2
import numpy as np;


class StarDetector(object):
    def __init__(self, address="Hubble_Pics/01_veritable mix of different galaxies.jpg"):

        # Read image
        self.im = cv2.imread(address, cv2.IMREAD_GRAYSCALE)
        #im2 = cv2.imread(address)
        # Filter Noise
        self.im = cv2.medianBlur(self.im, 9)

        # Invert image
        self.im = cv2.bitwise_not(self.im)

        # Set parameters for detection
        self.params = cv2.SimpleBlobDetector_Params()

        # grayscale values
        self.params.minThreshold = 20
        self.params.maxThreshold = 255

        # exclude alongated circles aka galaxies
        # params.filterByInertia = True
        # params.minInertiaRatio = 0.6

        # Set up minimum area threshold.
        self.params.filterByArea = True
        self.params.minArea = 100

        # Set up the detector with default parameters.
        # detector = cv2.SimpleBlobDetector_create()

        # Set up the detector with parameters.
        # Detect blobs.
        self.detector = cv2.SimpleBlobDetector_create(self.params)
    def calculate(self):

        keypoints = self.detector.detect(self.im)

        starsize = []
        for elements in keypoints:
            starsize.append(elements.size)
        starsize.sort(reverse=True)
        #print(starsize)
        tenBiggest = []
        for i in range(45):
            for j in range(len(keypoints)):
                if starsize[i] == keypoints[j].size:
                    tenBiggest.append(keypoints[j])
                    break

        # Draw detected blobs as red circles.
        # cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS ensures the size of the circle corresponds to the size of blob
        # im_with_keypoints = cv2.drawKeypoints(image, tenBiggest, np.array([]), (0, 0, 255),
        #                                      cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)
        # Show keypoints
        # cv2.imshow("Keypoints", im_with_keypoints)
        # cv2.imwrite("img.jpg",im_with_keypoints)
        #cv2.waitKey(0)
        #return keypoints
        return tenBiggest


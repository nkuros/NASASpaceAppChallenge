# Standard imports
import cv2
import numpy as np;
#"Hubble_Pics/01_veritable mix of different galaxies.jpg"
# Read image
im = cv2.imread("Hubble_Pics/hubble_friday_05292015.jpg", cv2.IMREAD_GRAYSCALE)
im2 = cv2.imread("Hubble_Pics/hubble_friday_05292015.jpg")
#Filter Noise
im = cv2.medianBlur(im,9)

#Invert image
im= cv2.bitwise_not(im)


# Set parameters for detection
params = cv2.SimpleBlobDetector_Params()

# grayscale values
params.minThreshold = 20
params.maxThreshold = 255

# exclude alongated circles aka galaxies
# params.filterByInertia = True
# params.minInertiaRatio = 0.6

# Set up minimum area threshold.
params.filterByArea = True
params.minArea = 100

# Set up the detector with default parameters.
# detector = cv2.SimpleBlobDetector_create()

# Set up the detector with parameters.
# Detect blobs.
detector = cv2.SimpleBlobDetector_create(params)
keypoints = detector.detect(im)

starsize = []
for elements in keypoints:
    starsize.append(elements.size)
starsize.sort(reverse=True)
print(starsize)
tenBiggest = []
for i in range(10):
    for j in range(len(keypoints)):
        if starsize[i] == keypoints[j].size:
            tenBiggest.append(keypoints[j])
            break

# Draw detected blobs as red circles.
# cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS ensures the size of the circle corresponds to the size of blob
im_with_keypoints = cv2.drawKeypoints(im2, keypoints, np.array([]), (0, 0, 255),
                                      cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)
# Show keypoints
cv2.imshow("Keypoints", im_with_keypoints)
cv2.imwrite("img.jpg",im_with_keypoints)
cv2.waitKey(0)

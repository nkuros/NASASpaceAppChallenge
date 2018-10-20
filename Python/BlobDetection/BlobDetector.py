# Standard imports
import cv2
import numpy as np;

# Read image
image = cv2.imread("Hubble_Pics/01_veritable mix of different galaxies.jpg", cv2.IMREAD_GRAYSCALE)
#Filter Noise
im = cv2.medianBlur(image,9)

#Invert image 
im= cv2.bitwise_not(im)

#im = cv2.Sobel(im, cv2.CV_8U, 1, 1, ksize=3)

# Set parameters for detection
params = cv2.SimpleBlobDetector_Params()

# grayscale values
params.minThreshold = 20
params.maxThreshold = 255

# exclude alongated circles aka galaxies
# params.filterByInertia = True
# params.minInertiaRatio = 0.6


# Set up the detector with default parameters.
# detector = cv2.SimpleBlobDetector_create()

# Set up the detector with parameters.
detector = cv2.SimpleBlobDetector_create(params)

# Detect blobs.
keypoints = detector.detect(im)
print(keypoints)

# Draw detected blobs as red circles.
# cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS ensures the size of the circle corresponds to the size of blob
im_with_keypoints = cv2.drawKeypoints(image, keypoints, np.array([]), (0, 0, 255),
                                      cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)
# Show keypoints
cv2.imshow("Keypoints", im_with_keypoints)
cv2.waitKey(0)

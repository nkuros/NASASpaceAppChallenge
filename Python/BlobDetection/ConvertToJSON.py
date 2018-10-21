import cv2
import numpy as np
import json
from NodeDefiner import StarDetector
#"Hubble_Pics/01_veritable mix of different galaxies.jpg"
class Node:
    def __init__(self, address="img2.jpg"):
        coord = StarDetector(address).calculate()
        self.output = []
        for i in coord:

            self.output.append({'x': i.pt[0], 'y': i.pt[1], 'size': i.size})
    def sendJSON(self):
        with open('test_json.json', 'w') as write_file:
            json.dump(self.output, write_file)

    def sendTexts(self):
        return self.output


pass
if __name__ == "__main__":
    node =Node()


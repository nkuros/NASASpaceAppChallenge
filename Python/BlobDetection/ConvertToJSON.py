import cv2
import numpy as np
import json
from NodeDefiner import StarDetector

class Node:

    coord = StarDetector().calculate()
    output = []
    for i in coord:

        output.append({'x': i.pt[0], 'y': i.pt[1], 'size': i.size})

    with open('test_json.json', 'w') as write_file:
        json.dump(output, write_file)


pass


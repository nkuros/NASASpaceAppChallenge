import cv2
import numpy as np
import json
from NodeDefiner import Stardetector
class Response{
	Integer systemId
	Blob base64
	String systemInfo
	List<Node>
	List<Destination> destinations
}

class Node:
    def __init__():
        coord = Stardetector()
        coordinatesX = []
        coordinatesY = []
        for i in range(len(Stardetector)):
            coordinatesX.append(coord[i].pt(0))
            coordinatesY.append(coord[i].pt(1))
    	String name
    	String info
    	List<Action> actions
    pass

class Action{
	String name
	List<Cost> costs
	List<Benefit> benefits
	List<Artifact> artifacts

}

class Cost{
	String type
	Decimal value
}

class Benefit{
	String type
	Decimal value
}

class Artifact{
	String name
	Decimal probability
}

class Destination{
	Integer systemId
	String direction
	List<Cost> costs
}
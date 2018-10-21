import KinectServer

server = KinectServer.MessageServer()

while True:
	server.keepListening()
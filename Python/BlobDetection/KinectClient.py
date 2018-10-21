import socket
import sys
import ast

class KinectClient(object):
    """docstring for KinectClient"""
    def __init__(self, hostname='localhost', port=10013):
        super(KinectClient, self).__init__()
        self.hostname = hostname
        self.port = port
        # Create a TCP/IP socket
        self.sock = socket.create_connection((self.hostname, self.port))

    def requestPositionPixelDetour(self):
        request = "['pos','pix','det']"
        print ("requesting: %s" % request)
        self.sock.sendall(request.encode('utf-8'))
        full_response = ""
        while not full_response.endswith("]"):
            data = self.sock.recv(16)
            data = data.decode('utf-8')
            full_response = full_response + data
        parsed_response = ast.literal_eval(full_response)
        print('received: ')
        print(parsed_response)
        return parsed_response

    def safeExit(self):
        self.sock.close()
import socket
from ConvertToJSON import Node
import ast
import cv2

class MessageServer(object):
    def __init__(self,hostname='localhost',port=10014):
        # Create a TCP/IP socket
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        # Bind the socket to the port
        self.server_address = (hostname, port)
        print('starting up on %s port %s' % self.server_address)
        self.sock.bind(self.server_address)
        # Listen for incoming connections
        self.sock.listen(1)

    def keepListening(self):
        print('waiting for a connection')
        connection, client_address = self.sock.accept()
        try:
            print('connection from %s' % str(client_address))

            # Receive the request in small chunks and retransmit it
            full_request = ""
            while True:
                request = connection.recv(1024)
                print('received %s' %request)
                if request.endswith("]'"):
                    full_request = full_request + request
                    #print ("full message received. parsing the message: %s" % full_request)
                    request_parsed = ast.literal_eval(full_request)
                    print("parsed request: ")
                    print(request_parsed)
                    #TODO: implement methods depending on request
                    #print("finding Kinect request:")


                    #cv2.waitKey(1)
                    response = Node(request_parsed)
                    #print('sending response back to the client. Sending = %s' % str(kinect_response))
                    connection.sendall(str(response.sendTexts))
                    full_request = ""
                elif request:
                    full_request = full_request + request
                else:
                    print('no more request from %s' % client_address)
                    break
        except TypeError as e:
            pass
        finally:
            # Clean up the connection
            connection.close()
            #close openCV windows

#!/usr/bin/python
from http.server import BaseHTTPRequestHandler, HTTPServer
from io import BytesIO
from ConvertToJSON import Node

PORT_NUMBER = 8082


# This class will handles any incoming request from
# the browser
class myHandler(BaseHTTPRequestHandler):

    # Handler for the GET requests

    def do_GET(self):

        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin","*")
        self.send_header('Content-type', 'text/html')
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        # Send the html message
        self.wfile.write(bytes("Hello World GET!","utf-8"))
        return

    def do_POST(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        #print("passou")
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        bodyString= body.decode("utf-8")
        nos = Node(bodyString)
        stars = nos.sendTexts()
        #response = BytesIO()
        #response.write(str(stars.sendTexts()))
        #self.wfile.write(bytes("Hello World POST!", "utf-8"))
        self.wfile.write(bytes(str(stars), "utf-8"))
        self.end_headers()
        # Send the html message


        return

try:
    # Create a web server and define the handler to manage the
    # incoming request
    server = HTTPServer(('', PORT_NUMBER), myHandler)
    print('Started httpserver on port ', PORT_NUMBER)

    # Wait forever for incoming htto requests
    server.serve_forever()

except KeyboardInterrupt:
    print('^C received, shutting down the web server')
    server.socket.close()



There’s actually nothing to download. At least not from this website. Here’s how to get up and running with Socket.IO

Getting the Socket.IO Server
The officially maintained Socket.IO server is written in Node.JS and available on NPM. To install Node.JS and NPM, click the Install button on the Node.JS website. Then run the following command:

npm install socket.io
If you want to learn how to use Socket.IO through pratical examples, head to Get Started.

Getting the Socket.IO Client
We distribute the browser client through our CDN, for free, forever.



<script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>


If you want to grab the source, grab the socket.io.js file from the socket.io-client repository.
Our client codebase runs on both Node.JS and browsers, and it’s also compatible with browserify.

Additionally, Socket.IO servers automatically serve the client for your convenience:

<script src="http://your-io-server/socket.io/socket.io.js">
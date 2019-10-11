const http = require('http');

// Create server object
http.createServer(//Write response
    (req, res) => {
        res.write('Hello world');  // this sends to browser
        res.end(); // ends response
    }
)
    .listen( // for server to run, it needs to listen on a port
        5000,
        () => console.log('Server running...')
    );

// above is the simplest possible server. it just returns 'Hello world' in <pre> tag.
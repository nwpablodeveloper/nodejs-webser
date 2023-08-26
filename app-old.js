console.clear();
const http = require('http');

http.createServer( ( req, res ) => {

    res.writeHead( 200, { 'Content-Type': 'text/plain' } )

    res.write('hola mundo');
    res.end();
})
.listen( 8080 );

const http = require('http');
const port = process.env.PORT || 3000
const fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(html);
        res.end();
    });

    server.listen(port, () => {
        console.log(`Server running at port ` + port);
    });
});

const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    console.log(req.url, res.method)

    // lodash
    const num = _.random(0, 10)
    console.log(num)

    // set headers
    res.setHeader('Content-Type', 'text/html');

    let path = './views/'

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            // res.write(data);
            res.end(data);
        }
    })

    res.end;
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests')
})







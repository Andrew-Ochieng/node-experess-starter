const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(4000);


app.get('/', (req, res) => {
    // automatically sets the content headers & status codes
    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html', { root: __dirname})
    res.render('index')
});


app.get('/about', (req, res) => {
    // automatically sets the content headers & status codes
    // res.send('<p>home page</p>');
    // res.sendFile('./views/about.html', { root: __dirname})
    res.render('about')
});


app.get('/blogs/create', (req, res) => {
    res.render('create')
});


// // redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });


// // 404
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname})
    res.status(404).render('404')
});






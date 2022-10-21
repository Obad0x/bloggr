const express = require('express');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');


app.listen(3000);

app.use((req, res, next)=>{
    console.log('Request Sent Successfuly...')
    console.log('method', req.method)
    console.log('url', req.url)
    console.log('host', req.hostname)
    console.log('path', req.path)
    console.log('status', res.statusCode)
    next();
})


app.use(express.static('public', next))


app.get('/', (req, res)=>{
    res.render('index', 
    {
            title : ' how to get Started IN  tech',
            Category : 'tech',
            snippet : '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem a officia ex dolor reiciendis.'
    })
  
})
app.get('/blog/create', (req, res)=>{
   res.render('newblog')

})
app.get('/home', (req, res)=>{
    res.redirect('/');
    res.statusCode = 301 ;
})
app.use((req, res)=>{
    res.status(404).sendFile('./views/404.ejs', {root: __dirname})
})



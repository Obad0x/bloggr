const express = require('express');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.listen(3000);


app.use(express.static('public'))






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
    res.status(404).render('404')
})



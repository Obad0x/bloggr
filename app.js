const express = require('express');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.listen(3000);


app.use(express.static('public'))




app.get('/', (req, res)=>{
    const blogs =[
        {title:'Blog1 ', snippet: 'ths is blog 1 snippet'}
        ,{title:'Blog2', snippet: 'this is blog 2 snippet'}
        ,{title:'Blog3', snippet: 'this is blog 3 snippet'}
    ]
    res.render('index', {title : 'Home', blogs}
   )
  
})
app.get('/blog/create', (req, res)=>{
   res.render('newblog', {title : 'Create a New Blog'})

})
app.get('/home', (req, res)=>{
    res.redirect('/');
    res.statusCode = 301 ;
})
app.use((req, res)=>{
    res.status(404).render('404',{title : 'Forbidden'})
})



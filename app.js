const express = require('express');
const { result } = require('lodash');
const _ = require('lodash');
const mongoose = require('mongoose');
const app = express();
const uri = 'mongodb+srv://engnrobad:bloggr@bloggr.6qgvbcc.mongodb.net/Bloggr?retryWrites=true&w=majority'



mongoose.connect(uri, {UseNewURLParser : true, UseUnifiedTopology : true})
.then(()=>  console.log('hello'))
.catch((err)=> console.log(err));
app.listen(3000)

app.set('view engine', 'ejs');
app.set('views', 'views');




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



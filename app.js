const express = require('express');
const { result, constant } = require('lodash');
const _ = require('lodash');
const mongoose = require('mongoose');
const app = express();
const uri = 'mongodb+srv://engnrobad:bloggr@bloggr.6qgvbcc.mongodb.net/Bloggr?retryWrites=true&w=majority';
const Blog = require('./models/blog');

mongoose.connect(uri, {UseNewURLParser : true, UseUnifiedTopology : true})
.then(()=>  app.listen(3000), console.log('Db Connected Successfully'))
.catch((err)=> console.log(err));




app.set('view engine', 'ejs');
app.set('views', 'views');




app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))








app.get('/', (req, res)=>{
 
    Blog.find()
    .then((result)=>{
        res.render('index', {title : 'Home', blogs : result})
    })
    .catch((err)=> console.log(err));
  
})





app.post('/', (req, res)=>{
    const blog = new Blog(req.body);

    blog.save()
    .then((result)=>{
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err)
    })

    })





    
    app.get('/:id', (req, res)=>{
        const id = req.params.id
  
        Blog.findById(id)
        .then((result)=>{
          res.render('content', {title : "Blog Details", blog :result})
        })
        .catch(err=> console.log(err))
      })




  
  app.delete('/:id', (req, res)=>{
      const id = req.params.id
      Blog.findByIdAndDelete(id)
      .then((result)=>{
          res.json({redirect : '/'})
      })
      .catch((err)=>{
          console.log(err)
      });
  
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


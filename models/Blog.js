
// required Files
const mongoose = require('mongoose');
const Schema = mongoose.Schema()

// Creating A New Schema
const blogSchema = new Schema(
    {
        title : {
            type : String,
            required : true, 

        }, 
        snippet : {
            type : String, 
            required : true
        }, 
        body :{
            type : String, 
            required : true
        }
    }
);


// Creating a new model off the Schema ^
//                                     |

const Blog = mongoose.model('Blog', blogSchema);


module.exports.default = Blog;

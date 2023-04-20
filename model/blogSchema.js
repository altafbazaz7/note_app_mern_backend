import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    image: { 
        type: String,
        required: false
      },
    
      title:{
        type: String,
        required: false 
      },
      description:{
        type: String,
        required: false 
      }
 
})

const blog = mongoose.model('blog', blogSchema);
export default blog;
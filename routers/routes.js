import express from 'express';
import { addBlog, getBlogs, getBlog, deleteBlog, updateBlog} from '../controller/blogController.js';

const routes = express.Router();

routes.post('/add',addBlog)
routes.get('/all',getBlogs)
routes.get('/:id',getBlog)
routes.delete('/:id',deleteBlog)
routes.put('/:id',updateBlog)



export default routes;
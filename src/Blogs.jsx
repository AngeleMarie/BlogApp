import React from 'react'
import { Link } from 'react-router-dom'
function Blogs({blogs,title}) {
  
  return (
    <div>
      <h2>{title}</h2>
            <div className="contents">
        {blogs.map((blog)=>(
          <div className='preview' key={blog.id}>
           <Link to={`/blogs/${blog.id}`}>
           <h4>{blog.title}</h4>
<p>written by: {blog.author}</p>
           </Link> 

{/* <button onClick={()=>{handleDelete(blog.Id)}}>Delete</button> */}
          </div>
         ))}
      </div>
    </div>
  )
}

export default Blogs
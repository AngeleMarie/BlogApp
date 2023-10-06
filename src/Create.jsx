import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Create() {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [description,setDescription]=useState('');
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  // const history=useHistory()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title,description, author}
    setIsLoading(true)
  fetch("http://localhost:8000/blogs",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(blog)
    })
    .then(()=>{
      console.log("blog added");
      setIsLoading(false)
      // history.go(-1);
      //history.push("/")
      navigate('/')     
    })
  }
 

  return (
    <div>
        <h1>Add new Blog</h1>
        <form onSubmit={handleSubmit} action="">
    
             <label>Blog's title:</label>
          <input required 
          value={title} 
          onChange={(e)=>setTitle(e.target.value)}/>
             <label>Blog's Description:</label>
          <textarea
          value={description} 
          onChange={(e)=>setDescription(e.target.value)}></textarea>
                <label>Blog's Author:</label>
          <input required 
          value={author} 
          onChange={(e)=>setAuthor(e.target.value)}/>

        {!isLoading && <button type="submit">Add Blog</button>}
          {isLoading&&<button disabled>Adding Blog ...</button>}

        </form>

    </div>
  )
}

export default Create
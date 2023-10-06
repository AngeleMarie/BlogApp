import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import useFetch from './useFetch'


function Details() {
    const {id}=useParams()
    const navigate=useNavigate()
    const {data:blogs,isLoading,error}=useFetch(" http://localhost:8000/blogs/"+id)
 
const handleDelete=()=>{
    fetch("http://localhost:8000/blogs/"+blogs.id,{
      method:"DELETE"
    }).then(()=>{
      navigate("/")

    })
  
}
  return (
    <div className='page'>
        {isLoading&&<div>Loading ...</div>}
        {error &&<div>{error}</div>}
        {blogs&&(
        <article>
          <h3>{blogs.title}</h3>
          <p>written by: {blogs.author}</p>
          <div>{blogs.description}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
        )
        }
    </div>
  )
}

export default Details
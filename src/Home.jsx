import React from 'react'
import Blogs from './Blogs'
import useFetch from './useFetch';

function Home() {

const {data:blogs,isLoading,error}=useFetch("http://localhost:8000/blogs")
 
 

  return (
    
    <div className='page'>
  
      {error&&<div>{error}</div>}
      {isLoading&&<div>Loading ...</div>}
      {blogs&&<Blogs blogs={blogs} title="All blogs" />}
   </div>

  )
}

export default Home
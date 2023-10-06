import {useEffect,useState}from 'react'

const useFetch=(url)=>{
    const AbortCont=new AbortController()
    const [data,setData]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const[error,setError]=useState(null)

    useEffect(()=>{
        setTimeout(()=>{
      fetch(url,{signal:AbortCont.signal})
    
      .then(res=>{
        if(!res.ok){
          throw Error("could not fetch data from these resources");
        }
         return res.json()})
    
      .then(data=>{
        setData(data);
        setIsLoading(false);
        setError(null)
  
      } )
      .catch(err=>{
        // if(err.name==="AbortError"){
            // console.log("fetch aborted");
        // }else{
            setError(err.message);
            setIsLoading(false);
            setData(null)    
            // }        
      })
      },1000)
    //   return ()=>AbortCont.abort()
      
  },[url])
return {data,isLoading,error}  
}

export default useFetch
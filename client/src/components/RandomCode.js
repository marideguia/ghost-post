import React,{useEffect,useState} from 'react'
import axios from 'axios'
import cloneDeep from "lodash/cloneDeep"
let id = 2

function RandomCode() {
    const [rootPosts, setRP]=useState([])
    var userPosts;
    


    const [posts, setPosts]=useState([])
    const val = cloneDeep(posts)
    val.reverse()
    const getPosts = async () => {
      try {
    userPosts = await axios.get(`http://localhost:3000/posts/${id}`)
       // userPosts.data.reverse()
    //     userPosts.data.filter( (post) => post.ParentID === null)
    // .sort( (a,b) => a.Upvotes.length - b.Upvotes.length)
    // .reverse()
    //console.log(userPosts.data)

        setRP(userPosts.data)
        setPosts(userPosts.data)
      } catch (err) {
        console.error(err.message);
      }
    };
      
    useEffect(()=>{
        getPosts()
        const interval=setInterval(()=>{
            getPosts()
        },5000)
             
             
        return()=>clearInterval(interval)
    },[]) 
    
    return (
        <div>
         <h1>useEffect</h1>
         <ul>
       {val.map(post=>(
         <li key={post.PostID}>{post.Text}</li>
       ))}
     </ul>
     <h1>rootposts</h1>
        </div>
      );
}
export default RandomCode
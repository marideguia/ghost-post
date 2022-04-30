import { useEffect, useRef } from "react"
import useState from 'react-usestateref'
import React from "react"
import { 
  getPosts as getPostsApi,
  createPost as createPostApi,
  deletePost as deletePostApi,
  updatePost as updatePostApi,
  upvotePost as upvotePostApi,
  removeUpvote as removeUpvoteApi
} from "../api.js"
import Post from "./Post.js"
import PostForm from "./PostForm.js"
import Header from "./Header.js"
import Sidebar from "./Sidebar.js"
import { useStore } from '../store/Store';
import {useParams} from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import cloneDeep from "lodash/cloneDeep"
// import SearchBar from "./SearchBar"

const Posts = () => {
  let { id } = useParams();
  let x;
  let navigate = useNavigate();
  const { logoColor } = useStore();
  const [sessionObject, setSessionObject]= useState({});
  const [postVal, setPostVal]= useState([]);
  let currentUserID = localStorage.getItem('UserID')
  // Store and set posts
  const [posts, setPosts] = useState([])
  const [creatorID, setCreatorID] = useState("")
  var [newPosts,setNP,ref]=useState([]);
  const [user_id, setUI]= useState({});
  const isFirstRender = useRef(true);
  var userPosts;
  // Store and set active (editing or replying to) posts
  const[activePost, setActivePost] = useState(null)
  // Get root posts only - ParentID is null. Sort by upvotes in descending order
  const postCopy = cloneDeep(posts)
  const rootPosts = postCopy.filter( (post) => post.ParentID === null)
    .sort( (a,b) => a.Upvotes.length - b.Upvotes.length)
    .reverse()


  // Get replies, sort by upvotes in descending order
  const getReplies = (postID) => {
    return posts.filter( (post) => post.ParentID == postID)
      .sort( (a,b) => a.Upvotes.length - b.Upvotes.length)
      .reverse()
  }
  const myCallback = ()=>{
    console.log(posts)
  }
 

  // Store newly created post***
  const addPost= (text, parentID) => {
    parentID = parentID || null;
    axios.post("http://localhost:3000/posts/ask", { UserID: currentUserID, Text: text,  SessionID: id, ParentID:parentID,Upvotes:[] }).then(response=>{
      //const postToAdd = { Text:text};
      const postToAdd = {
      UserID: currentUserID,
      SessionID: id,
      PostID: response.data.PostID,
      Text: text,
      ParentID: parentID,
      Upvotes: [],
      CreatedAt: response.data.CreatedAt}

      setPosts([...posts, postToAdd])
      setActivePost(null)
      console.log(response.data)
    })

  }

  // Prompt user to confirm  and remove post from display
  const deletePost = (postID) => {
    if (window.confirm('Are you sure you want to remove post?')) {
      axios.delete(`http://localhost:3000/posts/delete/${postID}`).then( ()=>{
        const updatedPosts = posts.filter( 
          (post) => post.PostID !== postID
        )
        setPosts(updatedPosts)
      })
    }
  }

  // Update post's Upvote list with user like ***
  
  const upvotePost = (postID, userID) => {
   // userID = String(localStorage.getItem('UserID'))
    upvotePostApi(postID, userID).then( () => {
      const updatedPosts = posts.map(post => {
        if (post.PostID === postID) {          
          const newUpvotes = post.Upvotes
          newUpvotes.push(userID)
          axios.put(`http://localhost:3000/posts/upvote/${postID}`, { Upvotes: newUpvotes });
          console.log('post upvoted', userID, postID,newUpvotes)
          return {...post, Upvotes: newUpvotes}
        }
        return post
      })
      setPosts(updatedPosts)
    })
  } 

  // Filter out upvote and update posts
  const removeUpvote=(postID, userID) => {
   // userID = String(localStorage.getItem('UserID'))
    removeUpvoteApi(postID, userID).then( () => {
      // find post
      const updatedPosts = posts.map(post => {
        if (post.PostID === postID) {
          // remove upvote from list
          const newUpvotes = post.Upvotes.filter( (upvote) => upvote !== userID)
          axios.put(`http://localhost:3000/posts/upvote/${postID}`, { Upvotes: newUpvotes });
          // console.log('post upvote removed', userID, postID, newUpvotes)
          return {...post, Upvotes: newUpvotes}
        }
        return post
      })
      setPosts(updatedPosts)
      console.log(updatedPosts)
    })
  }

  // Update post after editing
  const updatePost =(text,postID) => {
    axios.put(`http://localhost:3000/posts/edit`, { Text: text , id: postID });
    updatePostApi(text,postID).then( () => {
      const updatedPosts = posts.map(post => {
        if (post.PostID == postID) {
          // post.edited = true
          return {...post, Text: text}
        }
        return post
      })
      setPosts(updatedPosts)
      setActivePost(null)
    })
  }

  const getPosts = async () => {
    try{
      userPosts = await axios.get(`http://localhost:3000/posts/${id}`)
      
      // setNP(theArray)
      // console.log(ref.current)
     // setPostVal(userPosts.data)
      //console.log(theArray)
      //console.log(userPosts.data)
      setPosts(userPosts.data)
    }catch(err){
      console.error(err.message);
    }
  };

 // let theArray = []
  useEffect(() => {
    
    axios.get(`http://localhost:3000/sessions/${id}`).then((response)=>{
      setSessionObject(response.data);
      if (response.data.isActive== false){
                navigate(`/ArchPosts/${id}`);
              }else{
                console.log("not yet")
              }
      setCreatorID(response.data.creatorID)
    });
    getPosts();
    const interval=setInterval(()=>{
      axios.get(`http://localhost:3000/sessions/${id}`).then((response)=>{
      setSessionObject(response.data);
      if (response.data.isActive== false){
       navigate(`/ArchPosts/${id}`);
       }else{
          console.log("not yet")
        }
    });
      getPosts()
    },5000)  
    return()=>clearInterval(interval)
  },[])


  function archiveSession() {
    alert('You archiving the session and closing it permanently');
    axios.put(`http://localhost:3000/sessions/archive/${id}`)
    //popup ending session
  }
  
  

  return (
    // Display of submitted posts   
    <div className = "p-column-container">
      <Sidebar/>   
      <div className = "p-container">
        {currentUserID == creatorID && ( 
        <button onClick={archiveSession}>Archive and End</button>)}
        <Header title={sessionObject.title}/>
        <div className="posts">
          <h3 className="posts-title">Posts</h3>            
          
          {/* Submitted posts */}
          <div className="posts-container">
            {/* Form to submit posts */}
            
            { !posts ? 
              <div className="no-posts">
                <p>No posts yet.</p>
              </div>
              :
              rootPosts.map( (rootPost) => (
              // <div key={rootPost.PostID}>{rootPost.Text}</div>
              <Post 
                key={rootPost.PostID} 
                post={rootPost}
                replies={getReplies(rootPost.PostID)}
                currentUserID = {currentUserID}
                deletePost={deletePost}
                activePost={activePost}
                setActivePost={setActivePost}
                addPost={addPost}
                updatePost={updatePost}
                upvotePost={upvotePost}
                removeUpvote={removeUpvote}  
                arch={false}           
              />
              ))
            }
          </div> {/* posts-container */}
          <div className="posts-form">
            <div className="posts-form-title">
              Submit Post
            </div>              
            <PostForm submitLabel="Submit" handleSubmit={addPost}/>          
          </div> 
          
        </div>
        {/* posts */}
          
    
        
      </div>
      {/* p-container */}
      {/* <SearchBar /> */}

    </div>
    // column-container
  )
}
  
  

export default Posts
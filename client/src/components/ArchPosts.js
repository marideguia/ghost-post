import React,{ useEffect, useState } from "react"
import { 
  getPosts as getPostsApi,
  createPost as createPostApi,
  deletePost as deletePostApi,
  updatePost as updatePostApi,
  upvotePost as upvotePostApi,
  removeUpvote as removeUpvoteApi
} from "../api.js"
import Post from "./Post.js"
import Header from "./Header.js"
import Sidebar from "./Sidebar.js"
import axios from "axios";
import {useParams} from "react-router-dom";
// import SearchBar from "./SearchBar.js"

const Posts = () => {
  let { id } = useParams();
  // Store and set posts
  const [posts, setPosts] = useState([])
  const [sessionObject, setSessionObject]= useState({});
  let currentUserID = localStorage.getItem('UserID')
  // Store and set active (editing or replying to) posts
  const[activePost, setActivePost] = useState(null)
  // Get root posts only - ParentID is null. Sort by upvotes in descending order
  const rootPosts = posts.filter( (post) => post.ParentID === null)
    .sort( (a,b) => a.Upvotes.length - b.Upvotes.length)
    .reverse()
  
  // Get replies, sort by upvotes in descending order
  const getReplies = (postID) => {
    return posts.filter( (post) => post.ParentID === postID)
      .sort( (a,b) => a.Upvotes.length - b.Upvotes.length)
      .reverse()
  }

  // Store newly created post***
  const addPost= (text, parentID) => {
    parentID = parentID || null;
    axios.post("http://localhost:3000/posts/ask", { UserID: currentUserID, Text: text,  SessionID: id, ParentID:parentID,Upvotes:[] }).then(response=>{
      //const postToAdd = { Text:text};
      const postToAdd = {
      UserID: currentUserID,
      SessionID: String(id),
      PostID: String(response.data.PostID),
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
        if (post.PostID === postID) {
          // post.edited = true
          return {...post, Text: text}
        }
        return post
      })
      setPosts(updatedPosts)
      setActivePost(null)
    })
  }

  // call getposts and set posts to display at every re-render
  let theArray = []
  useEffect(() => {
    axios.get(`http://localhost:3000/sessions/${id}`).then((response)=>{
      setSessionObject(response.data);
    });
    axios.get(`http://localhost:3000/posts/${id}`).then((response)=>{
      //setPostList(response.data);
    console.log(response.data)
    for(let i in response.data){
      const newVal= response.data[i];
     newVal.PostID = String(response.data[i].PostID);
     newVal.UserID = String(response.data[i].UserID);
     theArray.push(newVal)
    }
  //console.log(theArray);
  setPosts(theArray)
  console.log(theArray)
  });
  

  }, [])

  return (
    // Display of submitted posts   
    <div className = "p-column-container">
      <Sidebar/>      
      <div className = "p-container">
        <Header title={sessionObject.title}/> 
    
        <div className="posts">
          <h3 className="posts-title">Archive</h3>            
          
          {/* Submitted posts */}
          <div className="a-posts-container">
            {/* Form to submit posts */}
            
            {!posts ? 
              <div className="no-posts">
                No posts yet.
              </div>
            :
              rootPosts.map( (rootPost) => (
              // <div key={rootPost.PostID}>{rootPost.Text}</div>
              <Post 
                key={rootPost.PostID} 
                post={rootPost}
                replies={getReplies(rootPost.PostID)}
                currentUserID={currentUserID}
                deletePost={deletePost}
                activePost={activePost}
                setActivePost={setActivePost}
                addPost={addPost}
                updatePost={updatePost}
                upvotePost={upvotePost}
                removeUpvote={removeUpvote}  
                arch={false}           
              />
            ))}
          </div> {/* posts-container */}

          {/* <div className="posts-form">
              <div className="posts-form-title">
                Submit Post
              </div>              
              <PostForm submitLabel="Submit" handleSubmit={addPost}/>
          </div>    */}
          
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

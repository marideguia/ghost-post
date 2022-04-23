<<<<<<< HEAD
import React,{ useEffect, useState } from "react"
=======
import { useEffect, useState } from "react"
import React from "react"
>>>>>>> e87060901d384b81980b8784663eb22f8eda29ef
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
<<<<<<< HEAD
import PSearch from "./PSearch.js"
import { useStore } from '../store/Store';
import {useParams} from "react-router-dom";
import axios from "axios";

=======
import SearchBar from "./SearchBar"
>>>>>>> e87060901d384b81980b8784663eb22f8eda29ef

const Posts = ({currentUserID}) => {
  let { id } = useParams();
  let x;
  const { logoColor } = useStore();
  const [sessionObject, setSessionObject]= useState({});
  const [postList, setPostList]= useState([])
  // Store and set posts
  const [posts, setPosts] = useState([])
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
  const addPost= (text, parentID) => (
    createPostApi(text, parentID).then(post => {
      setPosts([post, ...posts])
      setActivePost(null)
    })
  )

  // Prompt user to confirm  and remove post from display
  const deletePost = (postID) => {
    if (window.confirm('Are you sure you want to remove post?')) {
      deletePostApi(postID).then( () => {
        const updatedPosts = posts.filter( 
          (post) => post.PostID !== postID
        )
        setPosts(updatedPosts)
      })
    }
  }

  // Update post's Upvote list with user like ***
  const upvotePost = (postID, userID) => {
    upvotePostApi(postID, userID).then( () => {
      const updatedPosts = posts.map(post => {
        if (post.PostID === postID) {          
          const newUpvotes = post.Upvotes
          newUpvotes.push(userID)
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
    removeUpvoteApi(postID, userID).then( () => {
      // find post
      const updatedPosts = posts.map(post => {
        if (post.PostID === postID) {
          // remove upvote from list
          const newUpvotes = post.Upvotes.filter( (upvote) => upvote !== userID)
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
      //console.log("old",newVal.createdAt);
     // const newdate = new Date(response.data[i].createdAt)
     // newVal.createdAt = newdate;
     // console.log("new",newVal.createdAt);
     newVal.PostID = String(response.data[i].PostID);
    // newVal.createdAt = String(response.data[i].createdAt)
     theArray.push(newVal)
    }
  //console.log(theArray);
  setPosts(theArray)
  setPostList(response.data)
  console.log(theArray)
  
   //setPosts(response.data)
    });
   
    let data = [
      {
          UserID: "1",
          SessionID: 5,
          // courseID?
          PostID: "1",
          Text: "First comment",
          ParentID: null,
          Upvotes: ["2"],
          CreatedAt: "2022-04-20T16:14:08.000Z"             
      },
      {
          UserID: "2",
          SessionID: 5,
          PostID: "2",
          Text: "Second comment",
          ParentID: null,
          Upvotes: ["3"],
          CreatedAt: "2021-08-16T23:00:33.010+02:00",         
      },
      {
          UserID: "2",
          SessionID: 5,
          PostID: "3",
          Text: "First comment first child",
          ParentID: "1",
          Upvotes: ["3"],
          CreatedAt: "2021-08-16T23:00:33.010+02:00",          
      },
      {
          UserID: "1",
          SessionID: 5,
          PostID: "4",
          Text: "Second comment first child",
          ParentID: "2",
          Upvotes: ["2"],
          CreatedAt: "2021-08-16T23:00:33.010+02:00",      
      },
      {
          UserID: "3",
          SessionID: 5,
          PostID: "5",
          Text: "First comment second child",
          ParentID: "1",
          Upvotes: ["3"],
          CreatedAt: "2021-08-16T23:00:33.010+02:00",          
      }
  ] 

  }, [])


  

  return (
    // Display of submitted posts   
    <div className = "p-column-container">
      <Sidebar/>   
      <div className = "p-container">
        <Header title={sessionObject.title}/>
        <div className="posts">
          <h3 className="posts-title">Posts</h3>            
          
          {/* Submitted posts */}
          <div className="posts-container">
            {/* Form to submit posts */}
            
            {rootPosts.map( (rootPost) => (
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
      {/* <PSearch /> */}

    </div>
    // column-container
  )
}
  
  

export default Posts
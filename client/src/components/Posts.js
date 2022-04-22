import { useEffect, useState } from "react"
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
import SearchBar from "./SearchBar"

const Posts = ({currentUserID}) => {
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

  // call getposts and set posts to display at every re-render
  useEffect(() => {
    getPostsApi().then(data => {
      setPosts(data)
    })
  }, [])

  return (
    // Display of submitted posts   
    <div className = "p-column-container">
      <Sidebar/>   
      <div className = "p-container">
        <Header title="Senior Capstone Session 1"/>
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
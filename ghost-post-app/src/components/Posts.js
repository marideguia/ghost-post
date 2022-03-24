import { useEffect, useState } from "react"
import { 
  getPosts as getPostsApi,
  createPost as createPostApi,
  deletePost as deletePostApi,
  updatePost as updatePostApi,
  upvotePost as upvotePostApi
} from "../api.js"
import Post from "./Post.js"
import PostForm from "./PostForm.js"

const Posts = ({currentUserID}) => {
  // Store and set posts
  const [posts, setPosts] = useState([])

  // Store and set active (editing or replying) posts
  const[activePost, setActivePost] = useState(null)

  // Filter out replies (root posts only - ParentID is null)
  const rootPosts = posts.filter( (post) => post.ParentID === null)

  // Sort replies by create time
  const getReplies = (postID) => {
    return posts.filter(
      (post) => post.ParentID === postID).sort( (a,b) => 
      // Convert from string to Date
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
  }

  // Store new post
  // add all needed attributes
  const addPost= (text, parentID) => (
    createPostApi(text, parentID).then(post => {
      setPosts([post, ...posts])
      setActivePost(null)
    })
  )

  // Prompt user confirt and remove post from display
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

  // Update post's Upvote list with user like
  const upvotePost=(postID, userID) => {
    upvotePostApi(postID, userID).then( () => {
      const updatedPosts = posts.map(post => {
        if (post.PostID === postID) {
          console.log('post upvoted', userID, postID)
          const newUpvotes = post.Upvotes
          newUpvotes.push(userID)
          return {...post, Upvotes: newUpvotes}
        }
        return post
      })
      setPosts(updatedPosts)
      // setActivePost(null)
    })
  }


  const updatePost =(text,postID) => {
    updatePostApi(text,postID).then( () => {
      const updatedPosts = posts.map(post => {
        if (post.PostID === postID) {
          return {...post, Text: text}
        }
        return post
      })
      setPosts(updatedPosts)
      setActivePost(null)
    })
  }

  useEffect(() => {
    getPostsApi().then(data => {
      setPosts(data)
    })
  }, [])

  return (
    // Display of submitted posts
    <div className="posts">
      <h3 className="posts-title">Posts</h3>

      {/* Form to submit posts */}
      <div className="posts-form">
        <div className="posts-form-title">
          Submit Posts
        </div>
        <PostForm submitLabel="Submit" handleSubmit={addPost}/>
      </div>
      
      {/* Submitted posts */}
      <div className="posts-container">
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
          />
        ))}
      </div>
    </div>
  )
}

export default Posts
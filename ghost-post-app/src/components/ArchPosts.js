import { useEffect, useState } from "react"
import { 
  getPosts as getPostsApi,
} from "../api.js"
import Post from "./Post.js"
// import PostForm from "./PostForm.js"

const ArchPosts = ({currentUserID}) => {
  // Store and set posts
  const [posts, setPosts] = useState([])
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

  useEffect(() => {
    getPostsApi().then(data => {
      setPosts(data)
    })
  }, [])

  return (
    // Display of submitted posts
    <div className="posts">
      <h3 className="posts-title">Archived Posts</h3>
      
      {/* Submitted posts */}
      <div className="posts-container">
        {rootPosts.map( (rootPost) => (
          // <div key={rootPost.PostID}>{rootPost.Text}</div>
          <Post 
            key={rootPost.PostID} 
            post={rootPost}
            replies={getReplies(rootPost.PostID)}
            currentUserID={currentUserID}
          />
        ))}
      </div>
    </div>
  )
}

export default ArchPosts
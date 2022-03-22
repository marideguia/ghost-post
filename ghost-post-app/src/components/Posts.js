import { useEffect, useState } from "react"
import { getPosts as getPostsApi} from "../api"
import Post from "./Post.js"
import PostForm from "./PostForm"


const Posts = () => {
  const [posts, setPosts] = useState([])
  const rootPosts = posts.filter( (post) => post.ParentID === null)

  // sort by create time
  const getReplies = (postID) => {
    return posts.filter(
      (post) => post.ParentID === postID).sort( (a,b) => 
        new Date (a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
  }

  const addComment= (text, parentID) => (
    console.log("yuh")
  )

  useEffect(() => {
    //promise
    getPostsApi().then(data => {
      setPosts(data)
    })
  }, [])

  return (
    <div className="posts">
      <h3 className="posts-title">Posts</h3>

      <div className="posts-form-title">Write Post</div>
      <PostForm submitLabel="Write" handleSubmit={addComment}/>

        <div className="posts-container">
          {rootPosts.map( (rootPost) => (
            // <div key={rootPost.PostID}>{rootPost.Text}</div>
            <Post 
              key={rootPost.PostID} 
              post={rootPost}
              replies={getReplies(rootPost.PostID)}
            />
          ))}
        </div>
    </div>
  )
}

export default Posts
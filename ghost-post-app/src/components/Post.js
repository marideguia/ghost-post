import { FaArrowUp } from "react-icons/fa"

const Post = ({post, replies}) => {
  return (
    <div className="post">
      <div className="post-upvote">
        <FaArrowUp/>
        <label>{post.UpvoteCount}</label>
      </div>

      <div className="post-content">
        {/* <div>{post.CreatedAt}</div> */}
        <div>{post.Text}</div>
      </div>

      {/* render replies to 2nd tier */}
      {replies.length > 0 && (
        <div className="replies">
          {replies.map( (reply) => (
            <Post key={reply.PostID} post={reply} replies={[]} />
          ))}
        </div>
      )}    

    </div>
  )
}

export default Post
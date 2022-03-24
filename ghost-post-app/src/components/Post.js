import { FaArrowUp } from "react-icons/fa"
import PostForm from "./PostForm"

const Post = ({
  post, 
  replies, 
  currentUserID, 
  deletePost, 
  activePost, 
  setActivePost,
  parentID=null, // root comments always null
  addPost,
  updatePost,
}) => {
  const fiveMinutes=300000
  // true if post was created more than five minutes ago
  const timePassed = ( new Date() - (post.CreatedAt) ) > fiveMinutes
  // Can only reply if user has a user id
  const canReply= Boolean(currentUserID)
  // Can only edit post if user is the creator of the post and less than 5 minutes have passed since creation
  const canEdit = currentUserID === post.UserID && !timePassed
  // Can only delete post if user is the creator of the post and less than 5 minutes have passed since creation
  const canDelete = canEdit
  // Format post creation date
  const createdAt = new Date(post.CreatedAt).toLocaleDateString()
  // User is replying
  const isReplying = 
    activePost && 
    activePost.type ==='replying' && 
    activePost.id === post.PostID
  // User is editing their post
  const isEditing = 
    activePost && 
    activePost.type ==='editing' && 
    activePost.id === post.PostID
  // If root post, replyID is equivalent to PostID. Else, copy parentID
  const replyID =  parentID ? parentID : post.PostID
  return (
    <div className="post">      
      <div className="root-post">
        {/* Post voting */}
        <div className="post-upvote">
          <FaArrowUp/>
          <label>{post.UpvoteCount}</label>
        </div>

        {/* Post content */}
        <div className="post-content">
          <div>
            {createdAt}
          </div>

          {/* Render post text */}
          {!isEditing && (
            <div className="post-text">{post.Text}</div>
          )}

          {/* Render post editing form */}
          {isEditing && (
            <PostForm submitLabel="Update" 
              hasCancelButton
              initialText={post.Text} 
              handleSubmit={(text) => updatePost(text, post.PostID)} 
              handleCancel={() => setActivePost(null)}
            />
          )}

          {/* Render appropriate post actions */}
          <div className="post-actions">
            {/* conditional short circuits only render actions when condition is valid */}
            {/* Reply action */}
            {canReply && (
              <div 
                className="post-action"
                onClick={() => setActivePost(
                  // create object
                  {id: post.PostID, type: "replying"})
                }
              >
                Reply
              </div>
            )}

            {/* Edit action */}
            {canEdit && (
              <div 
                className="post-action"
                onClick={() => setActivePost(
                // create object
                  {id: post.PostID, type: "editing"})
              }
              >Edit</div>
            )}

            {/* Delete action */}
            {canDelete && (
              <div 
                className="post-action" 
                onClick={() => deletePost(post.PostID)}
              >
                Delete
              </div>
            )}
          </div> {/* End post-actions div */}

          {/* Render reply form if user is replying */}
          {isReplying && (
            <PostForm 
              submitLabel="reply" 
              handleSubmit={(text) => addPost(text, replyID)}
            />
          )}
        </div> {/* End post-contents div */}
      </div> {/* End root-post div */}

      {/* Rendering replies to 2nd tier */}
      {/* conditional statement short circuit renders replies only if > 0 exist */}
      
      {replies.length > 0 && (
        <div className="replies">
          {replies.map( (reply) => (
            <Post 
              key={reply.PostID} 
              post={reply} 
              replies={[]} 
              currentUserID={currentUserID} 
              deletePost={deletePost}
              parentID={post.PostID}
              addPost={addPost}
              activePost={activePost}
              setActivePost={setActivePost}
              updatePost={updatePost}
            />
          ))}
        </div>
      )}    
      
    {/* end "post" element */}
    </div> 
  )
}

export default Post
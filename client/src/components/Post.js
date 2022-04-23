import { FaArrowUp } from "react-icons/fa"
import PostForm from "./PostForm"
import { CgArrowLongRight } from "react-icons/cg"
import { useState } from "react"
import React from "react"

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
  upvotePost,
  removeUpvote,
  arch,
}) => {
  // Display replies if true
  const [openReply, setOpenReply] = useState(false)
  // Can only reply if user has a user id
  const canReply= Boolean(currentUserID)
  // Can only edit post if user is the creator of the post 
  const canEdit = currentUserID === post.UserID 
  // Can only delete post if user is the creator of the post 
  const canDelete = currentUserID === post.UserID 
  // length of Upvotes array
  const numUpvotes = post.Upvotes.length
  // True if user can upvote post - userID is not already in the upvotes array
  const canUpvote = !(post.Upvotes).includes(currentUserID)
  // Format post creation date
  const createdAt = new Date(post.CreatedAt).toLocaleString()

  // Toggles see/hide replies
  const open = () => {
    setOpenReply(!openReply)
  }

  // True if user is replying to this post
  const isReplying = 
    activePost && 
    activePost.type ==='replying' && 
    activePost.id === post.PostID

  // True if user is editing this post
  const isEditing = 
    activePost && 
    activePost.type ==='editing' && 
    activePost.id === post.PostID

  // If post has parent, replyID is parentID. Else, replyID is current postID
  const replyID =  parentID ? parentID : post.PostID

  return (
    <div className="post">      
      <div className="root-post">       

        <div className="post-container">
          {/* Post voting */}
          {canUpvote ? 
              <div className={arch ? "a-post-upvote" : "post-upvote"} 
                onClick={arch ? {} : () => upvotePost(post.PostID, currentUserID)} 
              >
                <FaArrowUp />     
                <label className="upvote-lbl">{numUpvotes}</label> 
              </div>                  
             : 
              <div className={arch ? "a-post-upvote" :"post-upvoted" }
                onClick={arch ? {} :() => removeUpvote(post.PostID, currentUserID)}
              >
                <FaArrowUp /> 
                <label className="upvote-lbl">{numUpvotes}</label> 
              </div>              
          }     

          {/* Post content - date, text, & see replies, reply, edit, delete functions*/}
          <div className="post-content">
            <div className = "top-row">
              <div className="created-at">{createdAt}</div>
              {/* <div className = "report" 
                onClick={() => setActivePost( {id:post.PostID, type: "reporting"}) }
              >
                🚩
              </div> */}
            </div>

            {/* Render post text */}
            {!isEditing && (
              <div className="post-text">{post.Text}</div>
            )}

            {/* Render post editing form if editing*/}
            {isEditing && (
              <PostForm 
                submitLabel="Update" 
                hasCancelButton
                initialText={post.Text} 
                handleSubmit={(text) => updatePost(text, post.PostID)} 
                handleCancel={() => setActivePost(null)}
              />
            )}

          {/* Render appropriate post actions */}
          <div className="post-actions">
            {/* conditional short circuits only render actions when 1st condition is valid */}
            
            {/* Reply action */}
            <div className = "post-action">              
              {canReply && (         
                <div 
                  className="post-action-reply"
                  style={{cursor: 'pointer'}}
                  onClick={() => setActivePost(
                    // create object
                    {id: post.PostID, type: "replying"})
                  }
                >                  
                  Reply                     
                </div>              
              )}
            </div>

            {/* Delete action */}
            <div className = "post-action">              
              {canDelete && (
                <div 
                  className="post-action-delete" 
                  onClick={() => deletePost(post.PostID)}
                >
                  Delete
                </div>
              )}
            </div>

            {/* Edit action */}
            <div className="post-action">
              {canEdit && (
                <div 
                  className="post-action-edit"
                  onClick={() => setActivePost(
                  // create object
                    {id: post.PostID, type: "editing"})
                }
                >Edit</div>
              )}
            </div>

            {(replies.length > 0 && !parentID &&
              // then display post action
              (!openReply ? 
                <div id="see-replies" className="post-action" 
                style={{cursor: 'pointer'}}
                onClick={open}>
                  See replies
                </div> 
              :
                <div id="see-replies" className="post-action" 
                style={{cursor: 'pointer'}}
                onClick={open}>
                  Hide replies
                </div>
              )
            )}               
          </div> 
          {/* End post-actions */}    

            {/* Render reply form if user is replying */}
            {isReplying && (
              <PostForm 
                submitLabel="Reply" 
                handleSubmit={(text) => addPost(text, replyID)}
                hasCancelButton
                handleCancel={() => setActivePost(null)}             
              />
            )}   

          </div> 
          {/* End post-content */}             

        </div> 
        {/* End post-container */}       
        
      </div>      
      {/* End root-post */}      

      {/* Rendering replies to 2nd tier */}
      {replies.length > 0 && openReply && (
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
              upvotePost={upvotePost}
              removeUpvote={removeUpvote}
              arch={arch}             
            />
          ))}
        </div>
      )}  
    </div> 
  )
}

export default Post
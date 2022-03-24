import {useState} from 'react'

// Form to submit posts
const PostForm = ({
  handleSubmit, 
  submitLabel,
  hasCancelButton = false,
  initialText = '',
  handleCancel,
}) => {
  // Store and set post's text
  const [text, setText]=useState(initialText)

  // Disable submit button when no text is entered
  const textDisabled = text.length === 0

  // Submit post
  const onSubmit = event => {
    event.preventDefault()
    handleSubmit(text)
    setText("")
  }

  return (
    // Submit post form
    <form onSubmit={onSubmit}>
        <textarea 
          className="post-form-textarea" 
          value={text} 
          // sync text value with text state
          onChange={(e) => setText(e.target.value)}
        />
        <button 
          className="post-form-button" 
          disabled={textDisabled}
        >
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button 
            type="button" 
            className="comment-form-button comment-form-cancel-button"
            onclick={handleCancel}
          >
            Cancel
          </button>
        )}
    </form>
  )
}

export default PostForm

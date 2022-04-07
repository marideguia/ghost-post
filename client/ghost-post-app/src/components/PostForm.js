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
      
      <div className="form-buttons" >
        <button 
          className="post-form-button" 
          disabled={textDisabled}
        >
          {submitLabel}
        </button>

        {hasCancelButton && (
          <button 
            type="button" 
            className="post-form-button post-form-cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}

      </div>
      
    </form>
  )
}

export default PostForm
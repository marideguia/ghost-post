import {useState, useRef} from 'react'
import React from 'react'


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
  const onSubmit = e => {    
    e.preventDefault()
    handleSubmit(text)
    setText("")
  }
  
  // Allow textarea submit on enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onSubmit(e)    
    }
  }

  return (
    // Submit post form
    <form className="p-form" onSubmit={onSubmit}>    

      <textarea 
        className="post-form-textarea" 
        value={text} 
        onKeyPress={handleKeyPress}
        // sync text value with text state
        onChange={(e) => setText(e.target.value)}
        // onKeyPress={focus}
      />
      
      <div className="form-buttons" >
        <button 
          type="submit"
          className="post-form-button" 
          // don't allow form submission if no text entered
          disabled={textDisabled}
        >
          {submitLabel}
        </button>

        {hasCancelButton && (
          <button 
            type="button" 
            className="post-form-cancel-button"
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
import {useState} from 'react'

const PostForm = ({handleSubmit, submitLabel}) => {
  const [text, setText]=useState("")
  const textDisabled = text.length === 0
  const onSubmit = event => {
    // won't submit by default
    event.preventDefault()
    handleSubmit(text)
    setText("")
  }

  return (
    <form onSubmit={onSubmit}>
        <textarea 
          className="post-form-textarea" 
          value= {text} 
          onChange={(e) => setText(e.target.value)}
        />
        <button className="post-form-button" disabled={textDisabled}>{submitLabel}</button>
    </form>

  )
}

export default PostForm

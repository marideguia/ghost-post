import React from "react"

const JoinCourse = () => {

    return (
      <div className="app2">
        <div className="joinsession-form">
          <div className="tc grow">
            <h1 className="login-header1">Join Course</h1>
          </div>
          
          <div className="form">
            <form 
              // onSubmit={handleSubmit}
            >
              <div className="input-container">
                <input 
                  className="enter-code" 
                  type="text" 
                  name="sesscode" 
                  placeholder="Enter Course Code" required
                  // onChange={onCodeChange} 
                />
                  {/* {renderErrorMessage("sesscode")} */}
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
  
          </div>
        </div>
      </div>
    )
  }
  
  export default JoinCourse
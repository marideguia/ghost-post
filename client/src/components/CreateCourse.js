import React from 'react'
import 'tachyons'; //CSS toolkit for styling
import './Home.css' //Additional Style Sheet for Component


const CreateCourse = () => {

  return (
    <div className="c-generator">
        <div class="dtc v-mid tc white ph3 ph4-l">
            <h1>Ghost Post Course Generator</h1>
            <h3>Enter title and description of your Course below</h3>    
            
            {/*Form code for allowing user to enter Course Info*/} 
            <form className='c-form'
                // onSubmit={handleSubmit}
            >                    
                <input 
                    className='pa3 ba b--dark-gray mt3' 
                    type="text" 
                    placeholder="Name of Course"                    
                />                    
                <input 
                    className='pa3 ba b--dark-gray mt2' 
                    type="text" 
                    placeholder="Description of Course"                 
                />
                <button 
                    className='mt3 w-20 f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue' 
                    type="submit" 
                    // disabled={disabled}
                >
                    Submit
                </button>                  
            </form>

            {/* <h2>{text}</h2>
            <h2 class ="animate-character">{text2}</h2>      */}
            
            

        {/* <div>
        {
          //Routing Links for pages the user can navigate to
        show?<h3 className = "grow"><Link to="/Courses">Go to Course</Link></h3>:null
        }
        
        </div> */}
        </div>  
    </div>

  )
}

export default CreateCourse
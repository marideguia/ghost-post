import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from 'react-router-dom';
// import "../pages/JoinSession.css";
import "./CreateJoinSession.css"

const JoinSession2 = () => {
  // const onClick = ()
  return (
    <div className="js-cont">
      <h2>Want your questions answered? Click below to join a session.</h2>
      <Link to="../JoinSession">
        <button className="js-btn">Join now</button>                  
      </Link>
    </div>
  )
}

export default JoinSession2;
  // React States
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [codeVal, setCodeVal] = useState("");
  
  // let navigate = useNavigate();
  

  // // User session info
  // const database = [
  //   {
  //     scode: "79bu4"
  //   },
  //   {
  //     scode: "abc12"
  //   }
  // ];

  // const errors = {
  //   sesscode: "invalid session code"
  // };

  // const onCodeChange = (event) => {
  //   //event.preventDefault();
  //   setCodeVal(event.target.value);
   
  // };

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();
  //   console.log(codeVal);
  //   fetch('http://localhost:3000/joinSession',{
  //     method: 'post',
  //     headers:{'Content-Type':'application/json'},
  //     body: JSON.stringify({
  //       code: codeVal
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data === 'success'){
  //       navigate("/App");
  //     }
  //   })

   
    /*var {sesscode} = document.forms[0];

    // Find session info
    const sessionData = database.find((user) => user.scode === sesscode.value);

    // Compare user info
    if (sessionData) {
      if (sessionData.scode !== sesscode.value) {
        // Invalid session code
        setErrorMessages({ name: "sesscode", message: errors.sesscode });
      } else {
        setIsSubmitted(true);
      }
    }*/
  // };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for joining session form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <input 
//             className="enter-code" 
//             type="text" 
//             name="sesscode" 
//             placeholder="Enter session code" required
//             onChange={onCodeChange} 
//           />
//             {renderErrorMessage("sesscode")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (  
//     <div className="app2">
//       <div className="joinsession-form">
//         <div className="tc grow"><h1 className="login-header1">Join Session</h1></div>
//         {isSubmitted ? <div>Joining Senior Capstone 1</div> : renderForm}
//       </div>
//     </div>
    
//   )
// }


import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./stylesjoinsession.css";

function Joinsession() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User session info
  const database = [
    {
      scode: "79BU4"
    },
    {
      scode: "ABC12"
    }
  ];

  const errors = {
    sesscode: "invalid session code"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var {sesscode} = document.forms[0];

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
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for joining session form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" name="sesscode" placeholder="Enter session code" required />
          {renderErrorMessage("sesscode")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="joinsession-form">
        <div className="title">Join Session</div>
        {isSubmitted ? <div>nice</div> : renderForm}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<joinsession />, rootElement);

export default Joinsession;
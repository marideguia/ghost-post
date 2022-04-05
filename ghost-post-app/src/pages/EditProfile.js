import React, { useState } from "react";
import editUser from "../api/editUser";

export default ({ changeToFalse, userDetails }) => {
  const [name, setName] = useState("");

  const onSubmit = () => {
    // const uid = firebaseApp.auth().currentUser.uid; Make mySQL version :)

    if (image) {
      console.log("Begin");
      var uploadTask = storageRef.ref(`image/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        () => {},
        error => {
          console.log(error);
        },
        () => {
          console.log("getting URL");
          //Add URL to the Database
          uploadTask.snapshot.ref.getDownloadURL().then(function(imageURL) {
            const data = {
              uid,
              name,
              email: userDetails.email
            };

            const result = editUser(data);

            if (result === true) {
              console.log("User Info Edited");
            }

            if (result === false) {
              console.log("ERROR");
            }
          });
        }
      );
    } else {
      const data = {
        uid,
        name
      };

      const result = editUser(data);

      if (result === true) {
        console.log("User Info Edited");
      }

      if (result === false) {
        console.log("ERROR");
      }
    }
  };

  return (
    <div>
      <div onClick={() => changeToFalse()}>Go Back</div>
      <input
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

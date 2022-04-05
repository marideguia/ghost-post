import React, { useState } from "react";
import EditIcon from '@material-ui/icons/Edit';
import EditProfile from "./EditProfile";
export default ({ userDetails }) => {
  const [editMode, setEditMode] = useState(false);

  const changeToFalse = () => {
    setEditMode(false);
  };

  return (
    <div className="outerBox m10">
      {editMode ? (
        <div>
          <EditProfile
            changeToFalse={changeToFalse}
            userDetails={userDetails}
          />
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", marginBottom: 10 }}>
            <div style={{ marginLeft: 10, flex: 1 }}>
              {userDetails && userDetails.name
                ? `${userDetails.name} ${userDetails.name}`
                : "Loading"}
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => setEditMode(true)}>
              <EditIcon>edit</EditIcon>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
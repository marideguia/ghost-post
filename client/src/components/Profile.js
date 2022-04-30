import React, {useState}from 'react'
import './Profile.css'
import axios from 'axios'
import SideBar from './Sidebar'
import Header from './Header'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    let navigate = useNavigate();
    const currentUserID = localStorage.getItem('UserID')
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newEmail, setEmail] = useState("")

    // 1st save changes button onClick
    const changeUserEmail= () => {
        axios.put(
            "http://localhost:3000/auth/updateEmail", 
            {
                UserID: currentUserID,
                newEmail:newEmail
            }, 
        ).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            }else{
                alert("Logging out - Sign in with new credentials")
                localStorage.clear();
                navigate("/Login");
            }
        })
    }

    // 2nd save changes button onClick
    const changePassword = () => {
        axios.put(
            "http://localhost:3000/auth/updatePassword", 
            {
                oldPassword: oldPassword, 
                newPassword: newPassword,
                UserID: currentUserID
            }, 
        ).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            }else{
                alert("Logging out - Sign in with new credentials")
                localStorage.clear();
                navigate("/Login");
            }
        })
    }

    return (
        <div className="pr-col-cont">
            <SideBar/>
            <div className="pr-dash">
                <Header title="Profile Settings"/>
                <div className="pr-info">
                    <div className='pru-cont'>
                        <h3 className="u-name">Change E-mail Account</h3>
                        <input classname='pr-text' 
                            type="searchText" 
                            style={{textTransform:'none', color:"red"}}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='pr-btn-cont'>
                        <button className='pr-btn' onClick={changeUserEmail}>Save Changes</button> 
                    </div>
                    
                    <div className='prp-cont'>
                        <h3>Change  Password</h3>
                        <div className='pr-tcont'>
                            <input className='pr-field' 
                                type="password" 
                                style={{textTransform:'none', color:"red"}}
                                onChange={(event) => setOldPassword(event.target.value)}
                            />
                            <label>Old Password</label>
                        </div>
                        <div className='pr-tcont2'>
                            <input className='pr-field' 
                                type="password" 
                                style={{textTransform:'none', color:"red"}}
                                onChange={(event) => setNewPassword(event.target.value)}
                            />  
                            <label>New Password</label>
                        </div>
                    </div>              
                    
                    <div className='pr-btn-cont'>
                        <button className='pr-btn' onClick={changePassword}>Save Changes</button> 
                    </div>
                    {/* router.put/ */}
                            
                </div>
            </div>
        </div>
  )
}

export default Profile
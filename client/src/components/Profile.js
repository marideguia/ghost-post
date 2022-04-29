import React, {useState}from 'react'
import './Profile.css'
import axios from 'axios'
import SideBar from './Sidebar'
import Header from './Header'

const Profile = ( {currentUserID} ) => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newUsername, setNewUsername] = useState("")

    // 1st save changes button onClick
    const changeUsername = () => {
        // backend
        console.log(newUsername)
    }

    // 2nd save changes button onClick
    const changePassword = () => {
        axios.put(
            "http://localhost:3001/auth/Profile", 
            {
                oldPassword: oldPassword, 
                newPassword: newPassword
            }, 
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
                
            }
        ).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            }
        })
    }

    // routes: check old password, confirm, change to new password
    // router.put('/Profile', validateToken, async(req, res) => {
    //     const {oldPassword, newPassword} = req.body
    //     const user = await Users.findOne({where: {username: req.user.username} })
    //     // compare old password with existing password in database table
    //     bcrypt.compare(oldPassword, user.password).then(async (match) => {
    //         if (!match) res.json({ error: "Wrong Password Entered" })

    //         bcrypt.hash(newPassword, 10).then( (hash) => {
    //             // find matching user and pass hashed password
    //             await Users.update(
    //                 {password :hash}, 
    //                 {where: {username: req.user.username}}
    //             )
    //             res.json("SUCCESS")
    //         })            
    //     })
    // })

    return (
        <div className="pr-col-cont">
            <SideBar/>
            <div className="pr-dash">
                <Header title="Profile Settings"/>
                <div className="pr-info">
                    <div className='pru-cont'>
                        <h3 className="u-name">Change E-mail Account</h3>
                        <input classname='pr-text' 
                            type="text" 
                            placeholder={currentUserID}
                            style={{textTransform:'none'}}
                            onChange={(event) => setNewUsername(event.target.value)}
                        />
                    </div>
                    <div className='pr-btn-cont'>
                        <button className='pr-btn' onClick={changePassword}>Save Changes</button> 
                    </div>
                    
                    <div className='prp-cont'>
                        <h3>Change  Password</h3>
                        <div className='pr-tcont'>
                            <input className='pr-field' 
                                type="text" 
                                placeholder="old password" 
                                style={{textTransform:'none'}}
                                onChange={(event) => setOldPassword(event.target.value)}
                            />
                            <label>Old Password</label>
                        </div>
                        <div className='pr-tcont'>
                            <input className='pr-field' 
                                type="text" 
                                placeholder="new password" 
                                style={{textTransform:'none'}}
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
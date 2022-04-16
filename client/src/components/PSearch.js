import React, { useState } from "react";
import Posts, { getPosts } from "../api.js"


const PSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (

    <div className="PSearch"> <input type="text" placeholder="Search posts..." onChange={(event) => {setSearchTerm(event.target.value);}}/>
    {getPosts.filter((val)=>{
      if (searchTerm == ""){
        return val
      }
      else if (val.text.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
        return val
      }
    }).map((val,key) =>{
      return(
        <div className="user" key = {key}>
          <p>{val.text}</p>
        </div>
      );
    })}
    </div>
  )
}
export default PSearch

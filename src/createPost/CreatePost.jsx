import React from "react";
import { useState } from "react";
import Filebase64 from 'react-file-base64' 
import { Link } from "react-router-dom";
import axios from 'axios'
import './createPost.css'
export default function CreatePost() {

    const [postData,setPostData] = useState({
        author:"",
        location:"",
        description:"",
        image:""
    })

    const handleClick=(e)=>{
        const {name,value}=e.target;
        setPostData({...postData,[name]:value})
    }

    const handleSubmit=async (e)=>{
          e.preventDefault();
          console.log(postData)
          const result = await axios.post("https://insta-clone-backend-ehxj.onrender.com/createPost",postData)
          console.log(result)
    }
  return (
    <div className="createpost-container">
    <form>
      <div>
        <Filebase64
          multiple={false}
          onDone={({ base64 }) => {
            setPostData({ ...postData, image: base64 });
          }}
        />
      </div>

      <div>
        <input type="text" onChange={handleClick} value={postData.Author} placeholder="Author" name="author" />
        <input type="text" onChange={(e)=>{handleClick(e)}}value={postData.Location} placeholder="Location" name="location" />
      </div>
      <div>
        <input type="text" onChange={(e)=>{handleClick(e)}} value={postData.Description} placeholder="Description" name="description" />
      </div>
      <button onClick={(e)=>{handleSubmit(e)}} type="submit">
        <Link to={"/post"}>
        Submit
        </Link>
        </button>
    
    </form>
    </div>
  );
}

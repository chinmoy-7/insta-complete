import React, { useState } from "react";
import { useEffect } from "react";
import './PostView.css'
import camera from '../../imgs/camera.png'
import insta from '../../imgs/insta.png'
import Cards from "../../card/card";

import { Link } from "react-router-dom";
const PostView = () => {
  const [loading,setLoading]=useState(false)
  const [data, setData] = useState([]);
  const [reload,setReload]= useState(false)
  useEffect(() => {
    setLoading(true)
    setReload(true)
    fetch("https://insta-clone-backend-ehxj.onrender.com/getPost")
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        console.log(user)
        setData(user.user.reverse());
        setReload(true)
        if(reload==true)
        setLoading(false);
      })
      .catch((e) => [console.log(e)]);
  }, [reload]);

  return(
    <>
    {loading&& <div class="loading">It is loading</div>}
   {!loading&&<div className="container">
        <header>
            <div className="header-left">
            <img src={insta} alt="logo" className="logo" />
            <h2>InstagramClone</h2>
            </div>
           <button> 
            <Link to={"/createPost"}>
            <img src={camera} alt="img" className="logo" />
            </Link>
            </button>
        </header>
        <section>
        <Cards userData={data}/>
        </section>
        </div>}
    </>
  );
};
export default PostView;

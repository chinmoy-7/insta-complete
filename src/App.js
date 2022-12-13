import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';
import './app.css'
import PostView from "./Layout Page/PostView/PostView";
import LandingPage from './LandingPage/LandingPage';
import CreatePost from './createPost/CreatePost';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/post" element={<PostView/>}/>
      <Route path="/createPost" element={<CreatePost/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

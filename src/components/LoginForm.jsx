
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost(user_id, after_password, session_id) {
    axios
      .post(baseURL, {
        user_id: {user_id},
        after_password: {after_password},
        session_id: {session_id}
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}







// import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
// import React, { useState, useEffect } from "react";


// const DataPost = () => {
//     const requestOptions ={
//         method: 'POST',
//         headers:{'Content-Type': 'application/json'},
//         body: JSON.stringify({Name: "hogehoge"})
//     };
//     const url = ""
    
//     return (
//         fetch(url,requestOptions)
//     );
// };

// export default DataPost
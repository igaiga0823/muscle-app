import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";


const LoginForm1 = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://iganami1106.com/muscle_api/index.cgi/loginstart', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])

    return (
        <div>
            <ul>
            {posts.SESSION_ID}
            <br/>
            {posts.RANDOM_ID}
            </ul>
            
        </div>
    )
}

export default LoginForm1;
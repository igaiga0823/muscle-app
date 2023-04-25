import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import md5 from 'md5';

const LoginForm1 = () => {
    const [posts, setPosts] = useState([])
    const [user_id, setText] = useState("")
    const [password, setText2] = useState("")
    const [after_password, setText3] = useState("")

    useEffect(() => {
        fetch('https://iganami1106.com/muscle_api/index.cgi/loginstart', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])

    const onClickText = (word) => {
        setText3(md5(word));
    }

    return (
        <>
            <ul>
            {posts.SESSION_ID}
            <br/>
            {posts.RANDOM_ID}
            </ul>
            <div>
                <input value={user_id} onChange={(event) => setText(event.target.value)}/>
                <input value={password} onChange={(event) => setText2(event.target.value)}/>
            </div>
            <div>
                <button onClick={() => onClickText(password)}>hash</button>
                <p>{user_id}</p>
                <p>{password}</p>
                <p>{after_password}</p>
            </div>
        </>
    )
}

export default LoginForm1;
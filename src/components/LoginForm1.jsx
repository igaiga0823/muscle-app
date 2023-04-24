import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";


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
    const script = document.createElement("script");

    useEffect(() => {
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);
    
    const handleHash = (word) => {
        const hash = window.CryptoJS.MD5(word).toString();
        setText3(hash);
        
        console.log(after_password);
    }

    const hash = (str) => {
        const md5 = crypto.createHash('md5')
        md5.update(str)
        return md5.digest('hex')
    }

    const onClickText = (word) => {
        setText3(hash(word));
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
                <button onClick={handleHash(password)}></button>
                <p>{user_id}</p>
                <p>{password}</p>
                <p>{after_password}</p>
            </div>
        </>
    )
}

export default LoginForm1;
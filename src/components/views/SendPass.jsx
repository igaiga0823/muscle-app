import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import md5 from 'md5';
import '../../css/Login.css'

const LoginForm1 = () => {
    const [posts, setPosts] = useState([])
    const [user_name, setText] = useState("")
    const [password, setText2] = useState("")
    const [after_password, setText3] = useState("")
    const [complete_password, setText4] = useState("")

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

    const onClickText2 = (word) => {
        setText4(md5(word));
    } 

    const dataSend = (initialPassword) => {
        onClickText(initialPassword);
        const firsthashPass = after_password;
        console.log(firsthashPass);
        console.log(posts.SESSION_ID)
        console.log(posts.RANDOM_ID)
        onClickText2(initialPassword + posts.RANDOM_ID);
        const secondhashPass = complete_password;
        console.log(secondhashPass);
        console.log(after_password);
        fetch(`https://iganami1106.com/muscle_api/index.cgi/signin?user_name=${user_name}&after_password=${complete_password}&session_id=${posts.SESSION_ID}`, {method: 'GET'})
          .then(res => res.json())
          .then(data => {
            setPosts(data)
            console.log(data)
          })
      }
      

    return (
        <div className='form'>
            {/* <ul>
            {posts.SESSION_ID}
            <br/>
            {posts.RANDOM_ID}
            </ul> */}
            <div>
                <input value={user_name} onChange={(event) => setText(event.target.value)}/>
                <input value={password} onChange={(event) => setText2(event.target.value)}/>
            </div>
            <div>
            <button onClick={() => onClickText(password)}>hash</button>
                <p>{user_name}</p>
                <p>{password}</p>
                <p>{after_password}</p>
            </div>
            <div>
                <button onClick={() => onClickText2(after_password+posts.RANDOM_ID)}>hash2</button>
                <p>{complete_password}</p>
            </div>
            <div>
                <button onClick={() => dataSend(password)}>send</button>
            </div>
        </div>
    )
}

export default LoginForm1;



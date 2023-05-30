import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import md5 from 'md5';
import '../../css/Login.css'
import {Box, Stack, Alert, Button, Input } from '@mui/material';
import { UserContext } from '../../App.js';

const Login = () => {

    const context = useContext(UserContext)
    const navigate = useNavigate();


    const [posts, setPosts] = useState([])
    const [user_name, setText] = useState("")
    const [password, setText2] = useState("")
    const [showError, setShowError] = useState(false);

    // const [after_password, setText3] = useState("")
    // const [complete_password, setText4] = useState("")

    useEffect(() => {
        fetch('https://iganami1106.com/muscle_api/index.cgi/loginstart', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])

    // const onClickText = (word) => {
    //     setText3(md5(word));
    //     const after_password1 = md5(word);

    // }

    // const onClickText2 = (word) => {
    //     setText4(md5(word));
    // } 

    const dataSend = (initialPassword) => {
        console.log(initialPassword);
        // onClickText(initialPassword);
        const after_password = md5(initialPassword);
        console.log(after_password);

        const sessionID = posts.SESSION_ID;
        const randomID = posts.RANDOM_ID;

        const complete_password = md5(after_password + String(randomID));
        console.log(sessionID)
        console.log(randomID)
        console.log(complete_password);
        console.log(after_password);
        fetch(`https://iganami1106.com/muscle_api/index.cgi/signin?user_name=${user_name}&after_password=${complete_password}&session_id=${sessionID}`, {method: 'GET'})
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.loginStatus == "True"){
              /**ユーザー情報をセット */
              context.setuser_name(data.userName.toString());
              context.setuser_id(data.userId.toString())
              context.setIsLogin(true)

              // /home パスに遷移する
              navigate('/home');

            }
            else{
                      //不適当な処理です
                setShowError(true);
                setTimeout(() => {
                setShowError(false);
                }, 2000);

            }
          })
      }
      

    return (
        
        <div className='form'>
            {showError ? (
      <Alert severity="error" sx={{ m: 1 }}>
        ユーザー名とパスワードが違います。
      </Alert>
    ):       <Box sx={{ m: 1 }}>
    　
  </Box>
    }
            <div>
                <input value={user_name} onChange={(event) => setText(event.target.value)} placeholder='ユーザー名'/>
                <input value={password} onChange={(event) => setText2(event.target.value)} placeholder='パスワード'/>
            </div>

            <div>
                <button onClick={() => dataSend(password)}>send</button>
            </div>

            {context.user_name}<br/>
            {context.user_id}
            {context.isLogin}
        </div>
    )
}

export default Login;



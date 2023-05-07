import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import md5 from 'md5';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../css/reset.css'

const Register = () => {
    const [posts, setPosts] = useState([])
    const [user_name, setText] = useState("")
    const [password, setText2] = useState("")
    const [email_address, setText3] = useState("")

    const dataSend = (initialPassword) => {
        console.log(initialPassword);
        const origin_password = md5(initialPassword);
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        console.log(email_address)
        console.log(user_name)
        if (!email_address) {
            setText3('※メールアドレスを入力してください')
        }
        else if (!regex.test(email_address)) {
            setText3('※メールアドレスを入力してください');
        }
        else {
            fetch(`https://iganami1106.com/muscle_api/index.cgi/signup?email_address=${email_address}&user_name=${user_name}&origin_password=${origin_password}`, {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }    
      }
      

    return (
        <div className=''>

            <div>
                ユーザー名：
                <input value={user_name} onChange={(event) => setText(event.target.value)}/>
                <br/>パスワード：
                <input value={password} onChange={(event) => setText2(event.target.value)}/>
                <br/>メールアドレス：
                <input value={email_address} onChange={(event) => setText3(event.target.value)}/>
            </div>
            <div>
                <button variant="contained" onClick={() => dataSend(password)}>send</button>
            </div>
        </div>
    )
}

export default Register;



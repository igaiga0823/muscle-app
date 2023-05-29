import { React, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import USER from './User'



const Test = () => {
  const [userId, setUserId] = useState(null);
  const [inputUserId, setInputUserId] = useState("");

  const handleClick = () => {
    setUserId(inputUserId);
    const expires = new Date(Date.now() + 3 * 60 * 60 * 1000); // 3 hours
    document.cookie = `userId=${inputUserId}; expires=${expires.toUTCString()}; path=/`;
  };

  const handleChange = (event) => {
    setInputUserId(event.target.value);
  };

  useEffect(() => {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split('=').map(decodeURIComponent);
      return { ...acc, [name]: value };
    }, {});
    const userIdCookie = cookies.userId;
    if (userIdCookie) {
      setUserId(userIdCookie);
    } else {
      setUserId(null);
    }
  }, []);

  const deleteCookie = () => {
    setInputUserId("");
    setUserId(null);
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0];
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

  };




  return (
    <div>
      <p>User ID: {userId ? userId : "Not logged in"}</p>
      {/* <p>User ID: {inputUserId}</p> */}
      <input type="text" value={inputUserId} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
      <br />
      <button onClick={deleteCookie}>ログアウト</button>
    </div>
  );

};

export default Test

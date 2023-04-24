import React, { useState, useEffect } from "react";

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split('=').map(decodeURIComponent);
      return {...acc, [name]: value};
    }, {});
    const userIdCookie = cookies.userId;
    if (userIdCookie) {
      setUserId(userIdCookie);
    } else {
      setUserId(null);
    }
  }, []);

  return (
    <div>
      <p>User ID: {userId ? userId : "Not logged in"}</p>
    </div>
  );
}

export default App;
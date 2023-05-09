import React, {useState, useEffect} from 'react'

const Fetch = () => {
  const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/traindata/post";
  const requestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({menu: "hogehoge"})
  };

  useEffect(() => {
    fetch(url, requestOptions)
      .then((response)=> response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
  }, []) // []を第2引数に指定することで、マウント時に1回だけ実行されるようになる

  return (
    <div>
      // レンダリングされる内容を記述
    </div>
  )
}

export default Fetch;
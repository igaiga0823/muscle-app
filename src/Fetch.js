import React, {useState, useEffect} from 'react'

const Fetch = () => {
  const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/traindata/post";
  const requestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
        "user_id": "1",
        "user_name":"並木",
        "length":"3",
        "menu_id":"4",
        "menu":"サイドレイズ",
        "kgData": ['60','65','70'],
        "repData":['10','8','5'],
        "date":"2023-05-10",
        "time":"30"
    })};

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
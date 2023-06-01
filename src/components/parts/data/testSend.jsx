import React, { useEffect } from 'react';

function TestSend() {
  useEffect(() => {
    const postData = async () => {
      try {
        const url = 'https://iganami1106.com/muscle_api/index.cgi/test'; // 送信先のURL
        const data = { "key": 'value' }; // 送信するデータ

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // レスポンスが成功した場合の処理
          console.log('データの送信に成功しました');
          const jsonResponse = await response.json(); // レスポンスのJSONを取得
          console.log(jsonResponse); // レスポンスのJSONを表示
          console.log(response)
        } else {
          // レスポンスがエラーの場合の処理
          console.error('データの送信に失敗しました');
        }
      } catch (error) {
        // エラーハンドリング
        console.error('エラー:', error);
      }
    };

    postData();
  }, []); // 第2引数に空の配列を指定することで、マウント時にのみ実行されるようにします

  return <div>My Component</div>;
}

export default TestSend;
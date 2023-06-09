import React, { useState, useContext } from "react";
import { Box, Stack, Alert, Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "App.js";

const SearchUser = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const [searchStr, setSearchStr] = useState("");
  const [friendList, setFriendList] = useState([]);



  const handleSearch = () => {
    // 検索処理を実装する
    // 検索文字列を使用して友達リストを取得するなどの操作を行う

    // 例: ダミーデータを使用して友達リストを設定
    const dummyFriendList = ["Friend1", "Friend2", "Friend3"];
    setFriendList(dummyFriendList);
    fetchData(searchStr)
  };

  const handleFriendClick = (friend) => {
    // 友達の詳細ページなどへの遷移処理を実装する
    // friendを使用して友達のIDなどを取得して遷移先のURLを構築するなどの操作を行う
    navigate(`/friend/${friend}`);
  };


  const fetchData = async (keyword) => {
    const url =
      "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/usersearch";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: keyword,
      }),
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      await setFriendList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={1} width={"80%"} maxWidth={"400px"} >
        <Input
          type="text"
          value={searchStr}

          onChange={(e) => setSearchStr(e.target.value)}
          placeholder="検索キーワードを入力してください"
        />
        <Button variant="contained" onClick={handleSearch}>
          検索
        </Button>
        <Stack>
          {friendList.map((friend) => (
            <Button key={friend} onClick={() => handleFriendClick(friend)}>
              {friend}
            </Button>
          ))}
        </Stack>
      </Stack>
    </div>
  );
};

export default SearchUser;

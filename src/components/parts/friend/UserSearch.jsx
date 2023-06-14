import React, { useState, useContext, useEffect } from "react";
import { Box, Stack, Alert, Icon, Button, Input, List, ListItem, ListItemText, IconButton, Avatar, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "App.js";
import GetUserInfo from "components/function/common/GetUserInfo";
import GetFriendList from "components/function/common/GetFriendList";



const UserSearch = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();



  const [searchStr, setSearchStr] = useState("");
  const [friendList, setFriendList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); // 追加

  const myFriendSet = new Set();
  myFriendSet.add(context.user_id)

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetFriendList(context.user_id);
      console.log(data);
      data.friendList.map((friend) => {
        myFriendSet.add(friend);
      });
      setFriendList(Array.from(myFriendSet));
    };

    fetchData();
  }, [context.user_id]);


  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setUserList([]);
        setSent(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [sent]);

  const handleSearch = () => {

    if (searchStr.trim() === "") {
      setError(true); // エラー状態をtrueにセット
      setLoading(false);
      setTimeout(() => {
        setError(false); // 2秒後にエラー状態をfalseにセット
      }, 2000);
      return;
    }
    setLoading(true);
    fetchData(searchStr);

  };


  const handleFriendRequest = (friend_id) => {
    setSent(true);
    setSearchStr("");
    friendRequest(friend_id);
  };




  const getUserName = (user_id) => {
    try {
      return GetUserInfo(user_id)
        .then(userInfo => {
          return userInfo["userNickName"] !== "" ? userInfo["userNickName"] : userInfo["userName"];
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPhoto = (user_id) => {
    try {
      return GetUserInfo(user_id)
        .then(userInfo => {
          return userInfo["photoUrl"];
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async (keyword) => {
    const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/usersearch";
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

      const friendListWithUserName = await Promise.all(
        data["data"].map(async (friend) => {
          const userName = await getUserName(friend);
          const userPhoto = await getUserPhoto(friend);
          return { id: friend, userName: userName, photoUrl: userPhoto };
        })
      );

      setUserList(friendListWithUserName);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };




  const friendRequest = async (friend_id) => {
    console.log("おｋ")
    const url =
      "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/friendrequest";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: context.user_id,
        friend_id: friend_id
      }),
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack spacing={1} width={"70vw"} maxWidth={"400px"} justifyContent="center">
        <Stack direction="row" spacing={1} >
          <Input
            type="text"
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
            placeholder="検索キーワードを入力"
          // style={{ color: 'white' }}
          />
          <Box>
            <Button width={"50px"} variant="contained" onClick={handleSearch} >
              検索
            </Button>
          </Box>
        </Stack >

        <Stack>

          {loading ? (
            <Box display="flex" justifyContent="center" margin={10}>
              <CircularProgress />
            </Box>
          ) : (
            <List sx={{ width: '100%', maxWidth: 360 }}>
              {error ? ( // エラーメッセージの表示
                <ListItem>
                  <Alert severity="error" onClose={() => setError(false)}>検索エラー</Alert>
                </ListItem>
              ) : (
                userList.map((friend, i) => (
                  <ListItem
                    key={friend.id}
                    disableGutters
                    secondaryAction={friendList.includes(friend.id.toString()) ?
                      <Button variant="outlined" disabled={true}>
                        {"登録済み"}
                      </Button>
                      :

                      <Button variant="outlined" onClick={() => handleFriendRequest(friend.id)} disabled={sent}>
                        {sent ? "送信しました" : "リクエスト"}
                      </Button>
                    }
                  >
                    <Avatar src={friend.photoUrl} />
                    <ListItemText primary={`　${friend.userName} `} />
                  </ListItem>
                ))
              )
              }
            </List>
          )}
        </Stack>
      </Stack >
    </Box >
  );
};

export default UserSearch;

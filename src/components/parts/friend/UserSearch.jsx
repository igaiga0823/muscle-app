import React, { useState, useContext, useEffect } from "react";
import { Box, Stack, Alert, Icon, Button, Input, List, ListItem, ListItemText, IconButton, Avatar, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "App.js";
import GetUserInfo from "components/function/common/GetUserInfo";
import GetFriendList from "components/function/common/GetFriendList";



const SearchUser = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();



  const [searchStr, setSearchStr] = useState("");
  const [friendList, setFriendList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);


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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={1} width={"80%"} maxWidth={"400px"} >
        <Input
          type="text"
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
          placeholder="検索キーワードを入力してください"
        />
        <Button variant="contained" onClick={handleSearch} >
          検索
        </Button>
        <Stack>
          {loading ? (
            <Box display="flex" justifyContent="center" margin={10}>
              <CircularProgress />
            </Box>
          ) : (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {userList.map((friend, i) => (
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
                  <ListItemText primary={`　${friend.userName}`} />
                </ListItem>
              ))}
            </List>
          )}
        </Stack>
      </Stack>
    </div>
  );
};

export default SearchUser;


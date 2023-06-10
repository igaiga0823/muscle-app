import React, { useState, useContext, useEffect } from "react";
import { Box, Stack, Alert, Icon, Button, Input, List, ListItem, ListItemText, IconButton, Avatar, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "App.js";
import GetUserInfo from "components/function/common/GetUserInfo";
import GetFriendList from "components/function/common/GetFriendList";




const RecieveFriendRequest = () => {

    const context = useContext(UserContext)
    const navigate = useNavigate();

    const [requestUserList, setRequestUserList] = useState([]);
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false); // 追加
    const [data, setData] = useState(null);



    const handleUpdateRequest = (friend_id) => {


        setLoading(true);
        fetchData();
        setLoading(false);
    };

    const handleOkFriendRequest = (friend_id) => {
        setSent(true);
        console.log(friend_id);
    }



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

    const fetchData = async () => {
        const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/getfriendrequest";
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: context.user_id,
            }),
        };
        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            setData(data);
            console.log(data);

            const friendListWithUserName = await Promise.all(
                data["requestUserList"].map(async (friend) => {
                    const userName = await getUserName(friend);
                    const userPhoto = await getUserPhoto(friend);
                    return { id: friend, userName: userName, photoUrl: userPhoto };
                })
            );

            setRequestUserList(friendListWithUserName);

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Stack spacing={1} width={"80%"} maxWidth={"400px"} justifyContent="center">

                <Button variant="contained" onClick={handleUpdateRequest} >
                    更新
                </Button>
                <Stack>
                    {loading ? (
                        <Box display="flex" justifyContent="center" margin={10}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {error ? ( // エラーメッセージの表示
                                <ListItem>
                                    <Alert severity="error" onClose={() => setError(false)}>検索エラー</Alert>
                                </ListItem>
                            ) : (
                                requestUserList.map((friend, i) => (
                                    <ListItem
                                        key={friend.id}
                                        disableGutters
                                        secondaryAction={

                                            <Button variant="outlined" onClick={() => handleOkFriendRequest(data["requestFriendIdList"][i])} disabled={sent}>
                                                {sent ? "送信しました" : "承諾"}
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
            </Stack>
        </Box >
    );

}

export default RecieveFriendRequest;
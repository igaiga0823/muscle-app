const GetUserInfo = (userId) => {
    const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/user";
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user_id: userId,
        }),
    };

    return fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.log(error);
            return { status: "failed" };
        });
};

export default GetUserInfo;
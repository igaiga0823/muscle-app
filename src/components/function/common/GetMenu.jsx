const GetMenu = (userId) => {
    const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/menu";
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user_id: userId,
        }),
    };

    return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.log(error);
            return { status: "failed" };
        });
};

export default GetMenu;

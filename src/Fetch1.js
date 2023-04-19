import React, {useState, useEffect} from 'react'

const Fetch1 = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://iganami1106.com/muscle_api/index.cgi/confirm', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])

    return (
        <div>
            <ul>
            fdas
            </ul>
            
        </div>
    )
}



export default Fetch1;
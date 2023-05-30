import { useState } from 'react'

const UserInfo = () => {
  const [user_id, setuser_id] = useState("1")
  const [user_name, setuser_name] = useState("mihairu1414")
  const [isLogin, setIsLogin] = useState(false)
  const [updateCount, setUpdateCount] = useState(0)

  return {
    user_id,
    setuser_id,
    user_name,
    setuser_name,
    isLogin,
    setIsLogin,
    updateCount,
    setUpdateCount,
  }
}

export default UserInfo
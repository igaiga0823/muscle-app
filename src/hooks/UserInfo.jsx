import { useState } from "react";

const UserInfo = () => {
  const [user_id, setuser_id] = useState("");
  const [user_name, setuser_name] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);

  return {
    user_id,
    setuser_id,
    user_name,
    setuser_name,
    isLogin,
    setIsLogin,
    updateCount,
    setUpdateCount,
  };
};

export default UserInfo;

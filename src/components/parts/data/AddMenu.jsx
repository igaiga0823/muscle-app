import { useState, useEffect, useContext } from "react";
import { Box, TextField, Autocomplete, Button, Alert } from "@mui/material";
import { UserContext } from 'App.js';
import GetParts from "components/function/common/GetParts";

import "css/reset.css";

const MenuSend = () => {
  var data = {};
  const [options, setOptions] = useState([""]);

  const context = useContext(UserContext)

  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([{ parts: "" }]);
  const [showNotification, setShowNotification] = useState(false);
  const [showError, setShowError] = useState(false);
  const [already, setAlready] = useState(false);
  const [open, setOpen] = useState(false)

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        parts: "",
      },
    ]);
  };

  const handleChange = (value, index, name) => {
    const newTasks = [...tasks];
    newTasks[index][name] = value;
    setTasks(newTasks);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };



  useEffect(() => {
    console.log(context.user_id)
    const fetchParts = async () => {
      try {
        console.log(context.user_id)
        const info = await GetParts(Number(context.user_id));
        console.log(context.user_id)
        console.log(info)
        setOptions(info["musclePart"]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchParts();
    console.log(options)
  }, [context.user_id]);


  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleSend = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const sendData = (tasks) => {
    if (value == "") {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
      return;
    }
    console.log(tasks);
    var body_parts = [];
    const z = tasks.length;
    console.log(z);
    for (let i = 0; i < z; i++) {
      body_parts.push(tasks[i]["parts"]);
    }
    console.log(body_parts);

    data["user_id"] = context.user_id;
    data["user_name"] = "hiroki";
    data["events"] = value;
    data["body_parts"] = body_parts;
    console.log(data);
    let x;

    fetch("https://iganami1106.com/muscle_api/index.cgi/menuadd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        if (data1.Success === "already") {
          setAlready(true);
          setTimeout(() => {
            setAlready(false);
          }, 2000);
        }
        else if (data1.Success === "False") {
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 2000);
        }
        else {
          handleSend();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>{context.user_id}</h1>
      {showNotification ? (
        <Alert severity="success" sx={{ m: 1 }}>
          メニューを登録しました
        </Alert>
      ) : (
        <Box component="span" sx={{ m: 1 }}>
          メニューを登録してください
        </Box>
      )}
      {showError && (
        <Alert severity="error" sx={{ m: 1 }}>
          メニューが入っていません
        </Alert>
      )}
      {already && (
        <Alert severity="error" sx={{ m: 1 }}>
          同じ名前のメニューがすでに登録されています
        </Alert>
      )}
      {open && (
        <Alert severity="error" sx={{ m: 1 }}>
          入力されていない要素があります
        </Alert>
      )}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="種目名"
          variant="outlined"
          value={value}
          onChange={handleInputChange}
        />
      </Box>
      {tasks.map((task, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <Autocomplete
              options={options}
              value={task.parts !== "" ? task.parts : null}
              sx={{ width: "40%", display: "inline-flex" }}
              renderInput={(params) => <TextField {...params} label="部位" />}
              onChange={(e, value) => handleChange(value, index, "parts")}
              getOptionLabel={(option) => option}
            />
          </div>
        </div>
      ))}
      <Button onClick={addTask} variant="contained">
        部位を追加
      </Button>
      <Button onClick={() => sendData(tasks)} variant="contained">
        send
      </Button>
    </div>
  );
};

export default MenuSend;

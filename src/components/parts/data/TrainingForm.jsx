import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import GetMenu from "components/function/common/GetMenu";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { UserContext } from 'App.js';
import dayjs from "dayjs";

function TrainingForm() {

  var data = {}

  const [tasks, setTasks] = useState([
    {
      kgData: '0',
      repData: '0',
    },
  ]);

  const [time, setTimes] = useState('')
  const [options, setOptions] = useState([])
  const [menuId, setMenuId] = useState([])
  const [menu, setMenu] = useState(null)
  const [date, setDates] = useState(null)
  const [user_name, setUserName] = useState('')
  const context = useContext(UserContext)


  useEffect(() => {
    setUserName("hiroki")
  }, [])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const info = await GetMenu(Number(context.user_id));
        console.log(info)
        setOptions(info["menu"]);
        setMenuId(info["menuId"]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMenu();
    console.log(options)
  }, [context.user_id]);

  const addTask = () => {
    setTasks([...tasks, {
      kgData: '0',
      repData: '0',
    }]);
    console.log(tasks)
  };

  console.log(options)

  const handleDateChange1 = (dates) => {
    const year = dayjs(dates).year()
    const month = dayjs(dates).month() + 1
    const day = dayjs(dates).date()
    const value = year + "/" + month + "/" + day
    setDates(value)
  };

  const handleChange = (value, index, name) => {
    const newTasks = [...tasks];
    newTasks[index][name] = value ? value.label : '';
    setTasks(newTasks);
  };

  const setTime = (value) => {
    setTimes(value)

  }

  const setDate = (value) => {
    setDates(value)
  }

  useEffect(() => {
    console.log(tasks)
    console.log(time)
    console.log(menu)
    console.log(date)
  }, [tasks])

  const kgSlots = Array.from(new Array(300)).map(
    (_, index) => {
      return { label: (index + 1).toString() };
    }
  );

  const repSlots = Array.from(new Array(50)).map(
    (_, index) => {
      return { label: (index + 1).toString() };
    }
  );


  const timeSlots = Array.from(new Array(24)).map(
    (_, index) => {
      const hour = Math.floor(index / 12);
      const minute = index % 12 === 0 ? 0 : index % 12 * 5;
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      return { value: hour * 60 + minute, label: timeString };
    }
  );


  const sendData = (tasks) => {
    console.log(tasks)
    var value_kg = []
    var value_rep = []
    const z = tasks.length
    console.log(z)
    for (let i = 0; i < z; i++) {
      console.log(tasks[i]["kgData"])
      value_kg.push(tasks[i]["kgData"])
      value_rep.push(tasks[i]["repData"])
    }
    console.log(value_kg)
    data['user_id'] = context.user_id
    data['length'] = String(z)
    data['user_name'] = user_name
    data['menu'] = menu
    data['kgData'] = value_kg
    data['repData'] = value_rep
    data['date'] = date
    data['time'] = time
    const index = options.indexOf(menu)
    data['menu_id'] = menuId[index]
    console.log(data)
    fetch('https://iganami1106.com/muscle_api/index.cgi/traindata/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data1 => {
        console.log('Success:', data1);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="task-form" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#696969",
    }}>
      <div className=''>
        <h3>トレーニング登録</h3>
        <div>
          <Autocomplete
            options={timeSlots.map((slot) => slot.label)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="time" />}
            onChange={(e, value) => setTime(value)}
          />
        </div>
      </div>
      <div className=''>
        <div>
          <Autocomplete
            value={menu}
            onChange={(event, newValue) => { setMenu(newValue); }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300, marginTop: '10px', }}
            renderInput={(params) => <TextField {...params} label="" />}
          />
        </div>
      </div>
      <div className=''>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ marginTop: '10px', }}>
            <DatePicker value={date} onChange={handleDateChange1} sx={{ marginTop: '10px', }} />
          </LocalizationProvider>
        </div>
      </div>
      {tasks.map((task, index) => (
        <div key={index}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
            <Autocomplete
              options={kgSlots}
              value={kgSlots.find((slot) => slot.label === task.kgData) || null}
              sx={{ width: '40%', display: 'inline-flex', }}
              renderInput={(params) => <TextField {...params} label="kg" />}
              onChange={(e, value) => handleChange(value, index, 'kgData')}
            />
            <Autocomplete
              options={repSlots}
              value={repSlots.find((slot) => slot.label === task.repData) || null}
              sx={{ width: '40%', display: 'inline-flex', }}
              renderInput={(params) => <TextField {...params} label="回" />}
              onChange={(e, value) => handleChange(value, index, 'repData')}
            />
          </div>
        </div>
      ))}
      <div>
        <Button onClick={addTask} variant="contained" sx={{ marginTop: '10px', marginRight: '10px' }}>Add Task</Button>
        <Button onClick={() => sendData(tasks)} variant="contained" sx={{ marginTop: '10px', }}>send</Button>
      </div>
    </div>
  );
}

export default TrainingForm;

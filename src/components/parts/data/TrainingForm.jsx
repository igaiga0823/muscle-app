import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import GetMenu from "components/function/common/GetMenu";
import { UserContext } from 'App.js';

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
  const [menu, setValue] = useState(null)
  const [date, setDates] = useState(null)
  const [user_name, setUserName] = useState('')
  const today = new Date()
  const dates = [today.getFullYear() + "/" + (today.getMonth() + 1) + '/' + today.getDate(), today.getFullYear() + "/" + (today.getMonth() + 1) + '/' + (today.getDate() - 1)];
  const context = useContext(UserContext)
  const user_id = Number(context.user_id)

  useEffect(() => {
    setUserName("hiroki")
  }, [])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const info = await GetMenu(Number(user_id));
        console.log(info)
        setOptions(info["menu"]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMenu();
    console.log(options)
  }, [user_id]);

  console.log(data)
  const addTask = () => {
    setTasks([...tasks, {
      kgData: '0',
      repData: '0',
    }]);
    console.log(tasks)
  };

  console.log(options)
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
    data['user_id'] = user_id
    data['length'] = String(z)
    data['user_name'] = user_name
    data['menu'] = menu
    data['kgData'] = value_kg
    data['repData'] = value_rep
    data['date'] = date
    data['time'] = time
    data['menu_id'] = "2"
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
    <div className="task-form">
      <div className=''>
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
            onChange={(event, newValue) => { setValue(newValue); }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="" />}
          />
        </div>
      </div>
      <div className=''>
        <div>
          <Autocomplete
            id="free-solo-demo"
            options={dates}
            renderInput={(params) => <TextField {...params} label="2023/08/23" />}
            onChange={(e, value) => setDate(value)}
          />
        </div>
      </div>
      {tasks.map((task, index) => (
        <div key={index}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
            <Autocomplete
              options={kgSlots}
              value={kgSlots.find((slot) => slot.label === task.kgData) || null}
              sx={{ width: '40%', display: 'inline-flex' }}
              renderInput={(params) => <TextField {...params} label="kg" />}
              onChange={(e, value) => handleChange(value, index, 'kgData')}
            />
            <Autocomplete
              options={repSlots}
              value={repSlots.find((slot) => slot.label === task.repData) || null}
              sx={{ width: '40%', display: 'inline-flex' }}
              renderInput={(params) => <TextField {...params} label="回" />}
              onChange={(e, value) => handleChange(value, index, 'repData')}
            />
          </div>
        </div>
      ))}
      <Button onClick={addTask} variant="contained" >Add Task</Button>
      <Button onClick={() => sendData(tasks)} variant="contained" >send</Button>
    </div>
  );
}

export default TrainingForm;

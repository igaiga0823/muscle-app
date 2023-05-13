import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

function TaskForm() {
  const [tasks, setTasks] = useState([
    {
      kgData: '0',
      repData: '0',
    },
  ]);
  
  const [num, setNum] = useState(1)

  const addTask = () => {
    setTasks([...tasks, {
      kgData: '0',
      repData: '0',
    }]);
    setNum(num + 1)
    console.log(tasks)
  };
  
  const handleChange = (value, index, field) => {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], [field]: value.target.value};
    setTasks(newTasks);
  };
  
  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  const kgSlots = Array.from(new Array(300)).map(
    (_, index) => {
      return { label: (index+1).toString()};
    }
  );

  const repSlots = Array.from(new Array(50)).map(
    (_, index) => {
      return { label: (index+1).toString()};
    }
  );

  
  const sendData = () => {
    fetch('https://example.com/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tasks)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="task-form">
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

      <Button onClick={sendData} variant="contained" >send</Button>
    </div>
  );
}

export default TaskForm;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

function TaskForm() {
  const [tasks, setTasks] = useState([
    {
      kgData: '',
      repData: '',
    },
  ]);
  
  const [num, setNum] = useState(1)

  const addTask = () => {
    setTasks([...tasks, {
      kgData: '',
      repData: '',
    }]);
  };

  const handleChange = (e, index) => {
    const newTasks = [...tasks];
    newTasks[index][e.target.name] = e.target.value;
    setTasks(newTasks);
  };

  const kgSlots = Array.from(new Array(300)).map(
    (_, index) => {
      return { label: index.toString()};
    }
  );

  const repSlots = Array.from(new Array(50)).map(
    (_, index) => {
      return { label: index.toString()};
    }
  );
  return (
    <div className="task-form">
      {tasks.map((task, index) => (
        <div key={index}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
            <Autocomplete
                options={kgSlots.map((slot) => slot.label)}
                sx={{ width: '40%', display: 'inline-flex' }}
                renderInput={(params) => <TextField {...params} label="kg" />}
                onChange={(e) => handleChange(e, index)}
            />
            <Autocomplete
                options={repSlots.map((slot) => slot.label)}
                sx={{ width: '40%', display: 'inline-flex' }}
                renderInput={(params) => <TextField {...params} label="回" />}
                onChange={(e) => handleChange(e, index)}
            />
          </div>
        </div>
      ))}
      <Button onClick={addTask} variant="contained" >Add Task</Button>
    </div>
  );
}

export default TaskForm;

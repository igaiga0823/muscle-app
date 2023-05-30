import { useState, useEffect } from "react";
import {Box,TextField,Autocomplete,Button} from '@mui/material';

import '../../css/reset.css'

const MenuSend = () => {

    var data = {};
    const options = ["二頭筋", "三頭筋", "大胸筋"];

    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState([{ parts: '' }]);

    const addTask = () => {
        setTasks([...tasks, {
            parts: ''
        }]);
    };

    const handleChange = (value, index, name) => {
        const newTasks = [...tasks];
        newTasks[index][name] = value;
        setTasks(newTasks);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value);
        console.log(value)
    };

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    
    const sendData = (tasks) => {
        console.log(tasks)
        var body_parts = []
        const z = tasks.length
        console.log(z)
        for (let i = 0; i < z; i ++){
          body_parts.push(tasks[i]["parts"])
        }
        console.log(body_parts)

        data['user_id'] = 3
        data['user_name'] = "hiroki"
        data['events'] = value
        data['body_parts'] = body_parts
        console.log(data)
        
        fetch('https://iganami1106.com/muscle_api/index.cgi/menuadd', {
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
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="種目名" variant="outlined" value={value} onChange={handleInputChange}/>
            </Box> 
            {tasks.map((task, index) => (
                <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                        <Autocomplete
                            options={options}
                            value={task.parts !== '' ? task.parts : null}
                            sx={{ width: '40%', display: 'inline-flex' }}
                            renderInput={(params) => <TextField {...params} label="部位" />}
                            onChange={(e, value) => handleChange(value, index, 'parts')}
                            getOptionLabel={(option) => option}
                        />
                    </div>
                </div>
            ))}
            <Button onClick={addTask} variant="contained">部位を追加</Button>
            <Button onClick={() => sendData(tasks)} variant="contained" >send</Button>
        </div>
    );
}

export default MenuSend;

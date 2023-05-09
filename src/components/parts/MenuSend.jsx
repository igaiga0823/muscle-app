
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import md5 from 'md5';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../../css/reset.css'

const MenuSend = () => {
    
    const options = ["push up", "incline"];
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    
    return (
        <div className=''>
            <div>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {setValue(newValue);}}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {setInputValue(newInputValue);}}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Menu" />}
            />
            </div>
        </div>
    )
}

export default MenuSend;





import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import md5 from 'md5';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../../css/reset.css'

const DateSend = () => {
    
    const options = ["push up", "incline"];
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    const today = new Date()
    const dates = [today.getFullYear() + "/" + (today.getMonth() + 1) + '/' + today.getDate(), today.getFullYear() + "/" + (today.getMonth() + 1) + '/' + (today.getDate()-1)];
    
    return (
        <div className=''>
            <div>
            <Autocomplete
                id="free-solo-demo"
                options={dates}
                renderInput={(params) => <TextField {...params} label="2023/08/23" />}
            />
            </div>
        </div>
    )
}

export default DateSend;


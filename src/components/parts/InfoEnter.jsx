
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import md5 from 'md5';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../../css/reset.css'

const InfoEnter = () => {

    const [sendData, sendDataFunc] = useState({
        user_id: "",
        user_name: "",
        length:"",
        menu: "",
        kgData: [],
        repData: [],
        date: "",
        time: ""
    })

    const options = ["push up", "incline"];

    const timeSlots = Array.from(new Array(24)).map(
        (_, index) => {
          const hour = Math.floor(index / 12);
          const minute = index % 12 === 0 ? 0 : index % 12 * 5;
          const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
          return { value: hour * 60 + minute, label: timeString };
        }
    );
    
    return (
        <div className=''>
            <div>
                <Autocomplete
                    options={timeSlots.map((slot) => slot.label)}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="time" />}
                />
            </div>
        </div>
    )
}

export default InfoEnter;








import React, { useState } from 'react';
import { Stack } from '@mui/material';
import FocusLock from 'react-focus-lock';

const WeightForm= () => {
  const [open, setOpen] = useState(false);
  const [weight, setWeight] = useState("");
  const handleSubmit = async () => {
    const url ="http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/weightForm/post" ;  // replace with your API endpoint
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "weight_data":weight,"user_id":1}),
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
  };

  return (
    <FocusLock disabled={!open}>
      <Stack alignItems="center" spacing={2}>
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Open'}
        </button>
        {open && (
          <label>
            your weight: 
            <input  type="text" onChange={e => setWeight(e.target.value)} />
          </label>
        )}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </Stack>
    </FocusLock>
  );
};

export default WeightForm;

import React, { useEffect } from 'react';
import { useState } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { BASE_URL } from './consts/consts';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  const [value, setValue] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id != -1) {
      axios.get(BASE_URL + '/getById/' + id).then(result => {
        setValue(result.data.ip);
        setState(result.data.state);
      })
    }
  }, [])

  const ipChange = (event) => {
    setValue(event.target.value);
  }

  const stateChange = (event) => {
    setState(event.target.value);
  }

  const add = () => {
    var regEx = /^((\d\d?|1\d\d|2([0-4]\d|5[0-5]))\.){3}(\d\d?|1\d\d|2([0-4]\d|5[0-5]))$/;
    if (!value.match(regEx)) {
      alert("Please enter a valid ip address.");
      return;
    }

    // fetch(BASE_URL + '/add', {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify({
    //         id: id,
    //         ip: value,
    //         state: state
    //       }) // body data type must match "Content-Type" header
    // }).then((response) => {
    //   navigate(`/getList`);
    // });

    axios.post(BASE_URL + '/add', id === -1 ? {
      ip: value, state: state
    } : {
      id: id, ip: value, state: state
    }).then((response) => {
      navigate(`/`);
    })

    // axios(BASE_URL + '/add', {
    //   method: 'post',
    //   data: {
    //     id: id,
    //     ip: value,
    //     state: state
    //   },
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'content-type': 'application/x-www-form-urlencoded'
    //   }
    // }).then((response) => {
    //   navigate(`/getList`);
    // })
  }

  return (
    <div className='grid justify-items-center'>
      <FormControl>
        <TextField id="outlined-basic" label="ip address" variant="outlined" placeholder='000.000.000.000'
          value={value}
          onChange={ipChange} />
      </FormControl >
      <br></br>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={state}
          onChange={stateChange}
        >
          <FormControlLabel value="available" control={<Radio />} label="available" />
          <FormControlLabel value="acquired" control={<Radio />} label="acquired" />
        </RadioGroup>
      </FormControl>
      <div className='flex mt-4 gap-4'>
        <Button variant="contained" color="success" onClick={() => add()}>{id === -1 ? "Add" : "Save"}</Button>
        <Button variant="contained" color="primary" onClick={() => navigate("/")}>Back</Button>
      </div>
    </div>
  );
}

export default Form;

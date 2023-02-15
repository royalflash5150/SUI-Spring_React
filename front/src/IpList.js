import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from './consts/consts';
import axios from "axios";

function IpList() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL + '/getList').then(result => {
      setList(result.data);
    })
  }, []);

  const handleClick = (id) => {
    navigate(`/form/${id}`);
  }

  return (
    <>
      <div className='grid justify-items-center'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>IP</TableCell>
                <TableCell>STATE</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" onClick={() => handleClick(-1)}>Add</Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.ip}
                  </TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="success" onClick={() => handleClick(row.id)}>Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default IpList;

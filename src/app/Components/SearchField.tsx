'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Context } from './ContextProvider';
import { useContext } from 'react';

type propType={
  onInputChange:()=>void
}
export default function SearchField({onInputChange}:propType) {
  
  
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width:{
        xs:'100%',
        sm:"14rem",
        md:"20rem"
      },margin:'0 auto' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        
        <TextField
        onChange={onInputChange}
          id="outlined-textarea"
          label="Find Weather"
          placeholder="Enter your City"
          multiline
        />
       
      </div>
 
    </Box>
  );
}

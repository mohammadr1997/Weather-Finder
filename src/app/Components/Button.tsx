'use client'
import * as React from 'react';
import { Context } from './ContextProvider';
import { useContext } from 'react';
import Button from '@mui/material/Button';
 type propType={
  inputValue:string
 }
export default function Searchbutton({inputValue}:propType) {
  const context=useContext(Context);
  const setCityName=context?.setCityName;
  const handleClick=()=>{
    if(!inputValue) return;
    if(setCityName){
      setCityName(inputValue)
    }
  }
  return (
  
   
      <Button onClick={handleClick} sx={{
        width:{
            xs:'100%',
            sm:'6rem',
            md:'9rem'
        },
        margin:'0 auto',
        
        fontSize:{
            sx:'12px',
            sm:'16px',
            md:'18px'
        },
        height:{
            xs:'3rem',
            sm:'3.5rem',
            md:'3.5rem'
        }

      }} variant="contained">Find</Button>
   
    
  );
}
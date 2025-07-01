'use client'
import React from 'react'
import SearchField from './SearchField'
import Searchbutton from './Button'
import WeatherDetails from './WeatherDetails'
import { useState } from 'react'
export default function Main() {
  const [inputValue,setInputValue]=useState('');
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
   const input=e.target.value.trim()
   const city=input.charAt(0).toUpperCase() + input.slice(1)
   setInputValue(city);
  }
 
  return (
    <section className='bg-stone-100 opacity-85 absolute top-2 h-[100vh] md:h-[110vh]  p-4 z-50 w-3/4 md:w-1/2  rounded-md flex justify-center align-middle'>
      <div className='flex flex-col flex-nowrap'>
         <h1 className='text-3xl md:text-5xl   text-center'>
        Weather Finder 
    </h1>

    <div className='flex flex-col md:flex-row md:flex-nowrap w-full justify-center gap-4 mt-5'>
<SearchField onInputChange={handleChange}/>
<Searchbutton inputValue={inputValue}/>
    </div>
    <hr className='mt-8' />
    <div className='flex flex-col gap-5 justify-center mt-5 md:mt-8'>

      <div><WeatherDetails/></div>
    </div>
      </div>
        
    </section>
   
  )
}

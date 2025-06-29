'use client'
import React from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Context } from './ContextProvider'
import { weatherImageMap } from '../data'
import Loading from './Loading'
import { API_KEY } from '../lib/secret'
import ErrorAlert from './Error'
import { useContext } from 'react'
import axios from 'axios'
export default function WeatherDetails() {
  const atmosphere=["Mist", "Smoke", "Haze", "Dust", "Sand", "Ash"]
  const extreme=['Squall',"Tornado"]
         const context=useContext(Context)
         const cityName=context?.cityName
 


 const findWeather=async(city:string)=>{
  
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    return response.data
 }

if(!cityName) return;
 const {data,isLoading}=useQuery({
    queryKey:['weatherFinder',cityName],
    queryFn:()=>findWeather(cityName),
    enabled:!!cityName,
    retry:2,
    placeholderData:keepPreviousData
 })

console.log('data',data)
let image=data?.weather[0].main
const isAtmosphere= atmosphere.find((condition)=>condition===image)
const isExtreme=extreme.find((condition)=>condition===image)
if(isAtmosphere) image='Atmosphere'
if(isExtreme) image='Extreme'

const imageSrc=weatherImageMap[image] || '';





const date=new Date();
const formattedDate=date.toDateString();
  return (
    <section className='flex flex-col gap-1 justify-center'>
            <h2 className='text-xl md:text-3xl text-center'>{data?.weather[0].description}</h2>
      <span className='text-stone-500 text-md md:text-lg text-center opacity-90'>{formattedDate}</span>
      {data?
       <div className='flex opacity-100 flex-col gap-1 justify-center w-full '>
         <span className='text-center text-sky-800 text-lg md:text-xl'>{data?.name},{data?.sys.country}</span>
         <div className='w-full text-center mt-0 mb-10 md:mb-44 md:mt-4 opacity-100'>
          <img className='w-1/2 h-1/2 z-50 opacity-100 mx-auto' src={imageSrc} alt="icon-weather" />
             
         </div>
      <div className='flex flex-col gap-2  -mt-8 md:-mt-40 '>
          <span className='text-lg md:text-xl text-center'>Additioanl Information</span>
          <div className='flex flex-col md:flex-row  gap-4  md:flex-wrap md:justify-center w-full '>
            <div className='w-full mx-auto flex flex-row flex-nowrap gap-3 md:gap-8 justify-around text-center md:w-[10.5rem] '><span className=' text-sm md:text-md w-1/6'>High/Low</span> <span className='text-stone-600 text-sm md:text-md '>{data?.main.temp_min}&nbsp; / {data?.main.temp_max}</span></div>
             <div className='w-full flex flex-row flex-nowrap gap-3 md:gap-4 justify-around text-center md:w-[10.5rem] mx-auto '><span className=' text-sm md:text-md '>Wind</span> <span className='text-stone-600 text-sm md:text-md '>{data?.wind.speed} km/h</span></div>
               <div className='w-full flex flex-row flex-nowrap gap-3 md:gap-4 justify-around text-center md:w-[10.5rem] mx-auto '><span className=' text-sm md:text-md  '>Humidity</span> <span className='text-stone-600 text-sm md:text-md '>{data?.main.humidity} %</span></div>
             <div className='w-full flex flex-row flex-nowrap gap-3 md:gap-4 justify-around text-center md:w-[10.5rem] mx-auto '><span className=' text-sm md:text-md  '>Visibility</span> <span className='text-stone-600 text-sm md:text-md '>{data?.visibility} ml</span></div>
          
          </div>

         </div>
      </div> : isLoading ? <Loading/>: <ErrorAlert/> }
     
     

    </section>
  )
}

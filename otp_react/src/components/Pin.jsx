import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { PinItem } from './PinItem';

export const Pin = ({length,setOtp}) => {
    const inputRef = useRef([]);
    const[arrayLength] = useState(new Array(length).fill(""));
    const[otpvalue,setOtpValue] = useState(new Array(length).fill(""));
   const handleChange = (e,index)=>{
    otpvalue[index]=e.target.value;
    if(index<length-1){
        inputRef.current[index+1].focus();
    }
    setOtp(otpvalue.join(""));
   }
  return (
    <div className='inputs'>
        {arrayLength.map((e,index)=>{
            return <PinItem key={index} handleChange={(e)=>handleChange(e,index)} ref={(element)=>{
                inputRef.current[index]=element;
                console.log(inputRef.current);
             }} />
        })}
    </div>
  )
}

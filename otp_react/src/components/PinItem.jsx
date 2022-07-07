import React from 'react'
import { forwardRef } from 'react'

export const PinItem = forwardRef(({handleChange},ref) => {
    const handleOtpinputs = (e)=>{
        if(e.keyCode===8){

        }
        else{
            handleChange(e);
        }
    }
  return (
    <div className='ipdiv' >
       <input type="text" maxLength={1} onKeyUp={handleOtpinputs} ref={ref} /> 
    </div>
  )
});

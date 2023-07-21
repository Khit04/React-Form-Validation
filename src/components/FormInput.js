import React, { useState } from 'react'
import "./formInput.css"

export const FormInput = (props) => {
  const [focused,setFocused] = useState(false);
  const {label, errorMessage, onChange, id, ...inputProps} = props;
  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        onFocus={()=>
            inputProps.name==="confirmPasword" && setFocused(true)}
        focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}
 
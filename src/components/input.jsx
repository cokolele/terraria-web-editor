import React, { useState } from "react";

import "/components/styles/input.css";

const Input = ({ defaultValue, text, checkbox, select }) => {
   const [value, setValue] = useState(typeof defaultValue == "number" ? defaultValue.toFixed(2) : defaultValue);

   const onTextChange = (e) => {
      setValue(e.target.value);
   }

   const onCheckboxChange = (e) => {
      setValue(!value);
   }

   if (text)
      return <input className="input" type="text" value={value} onChange={onTextChange}/>

   if (checkbox)
      return <input className="input" type="checkbox" checked={value} onChange={onCheckboxChange}/>
}

export default Input;

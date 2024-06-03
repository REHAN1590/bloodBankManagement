import React from 'react';

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div class="mb-1">
                  <label htmlFor={labelFor}class="form-label">
                    {labelText}</label>
                  <input 
                  type={inputType}
                  class="form-control" 
                  name={name}
                  value={value}
                  onChange={onChange}
                  />
   
       </div>
    </>
  );
};

export default InputType;

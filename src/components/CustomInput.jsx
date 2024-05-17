// src/components/CustomInput.js
import React, { useState } from 'react';

const CustomInput = ({ value, placeholder, label, type, name, handleChange, important, info, disabled, hasError, options }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <article className='form_input_container'>
      <label htmlFor={name} className='font-semibold'>
        {label} {important && <span className='important'>*</span>}
      </label>
      {type === 'password' ? (
        <div className='relative w-full'>
          <input
            type={showPassword ? 'text' : 'password'}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            className={`${hasError ? 'formInput !border-red-500' : 'formInput'}`}
            disabled={disabled}
          />
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='absolute top-1/2 right-3 transform -translate-y-1/2'
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      ) : type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className={`${hasError ? 'formInput !border-red-500' : 'formInput'}`}
          disabled={disabled}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={`${hasError ? 'formInput !border-red-500' : 'formInput'}`}
          disabled={disabled}
          max={type === 'date' ? new Date().toISOString().split("T")[0] : undefined}
        />
      )}
      {info && info}
    </article>
  );
};

export default CustomInput;

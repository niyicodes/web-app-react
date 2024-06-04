import React from 'react'
import { TextField } from '@mui/material'

const AddAddress = ({ prevStep, handleChange, values, handleFinalSubmit, errors }) => {
 return (
  <div className=''>
   <TextField id="client-address-input" value={values.clientAddress}
    onChange={(e) => handleChange(e, 'clientAddress')} label="Client Address" variant="standard" />
   <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded mr-2">
    Back
   </button>
   <button onClick={handleFinalSubmit} className="bg-blue-500 text-white p-2 rounded">
    submit
   </button>
  </div>
 )
}

export default AddAddress
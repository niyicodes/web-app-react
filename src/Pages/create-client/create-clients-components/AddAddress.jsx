import React from 'react'
import CustomInput from '../../../components/CustomInput'

const AddAddress = ({ prevStep, handleChange, values, handleFinalSubmit, errors }) => {
 return (
  <div className=''>
   <CustomInput
    type="text"
    name="clientAddress"
    label="Client Address"
    value={values.clientAddress}
    handleChange={handleChange}
    hasError={errors.clientAddress}
    important
   />
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
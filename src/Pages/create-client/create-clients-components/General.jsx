import React from 'react'
import CustomInput from '../../../components/CustomInput'

const General = ({ nextStep, handleChange, values, errors }) => {
 return (
  <div className="p-4">
   <h2 className="text-xl mb-4">General Information</h2>
   {/* names */}
   <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
    <CustomInput
     type="text"
     name="firstName"
     label="First Name"
     value={values.firstName}
     handleChange={handleChange}
     hasError={errors.firstName}
     important
    />
    <CustomInput
     type="text"
     name="lastName"
     label="Last Name"
     value={values.lastName}
     handleChange={handleChange}
     hasError={errors.lastName}
     important
    />
    <CustomInput
     type="text"
     name="middleName"
     label="Middle Name"
     value={values.middleName}
     handleChange={handleChange}
    />
   </div>
   {/* other personal info */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    <CustomInput
     type="date"
     name="dob"
     label="Date of Birth"
     value={values.dob}
     handleChange={handleChange}
     hasError={errors.dob}
     important
    />
    <CustomInput
     type="select"
     name="gender"
     label="Gender"
     value={values.gender}
     handleChange={handleChange}
     hasError={errors.gender}
     options={[
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
      // Add more options as needed
     ]}
     placeholder="Select a gender"
     important
    />
   </div>
   {/* more info */}
   <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
    <CustomInput
     type="email"
     name="email"
     label="Email"
     value={values.email}
     handleChange={handleChange}
     hasError={errors.email}
     important
    />
    <CustomInput
     type="text"
     name="phone"
     label="Phone Number"
     value={values.phone}
     handleChange={handleChange}
     hasError={errors.phone}
     important
    />
    <CustomInput
     type="select"
     name="office"
     label="Office"
     value={values.office}
     handleChange={handleChange}
     hasError={errors.office}
     options={[
      { value: 'office1', label: 'Office 1' },
      { value: 'office2', label: 'Office 2' },
      // Add more options as needed
     ]}
     placeholder="Select an office"
     important
    />
   </div>
   {/* last info */}
   <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    <CustomInput
     type="select"
     name="legalForm"
     label="Legal Form"
     value={values.legalForm}
     handleChange={handleChange}
     hasError={errors.legalForm}
     options={[
      { value: 'form1', label: 'Form 1' },
      { value: 'form2', label: 'Form 2' },
      // Add more options as needed
     ]}
     placeholder="Select a legal form"
     important
    />
    <CustomInput
     type="select"
     name="clientType"
     label="Client Type"
     value={values.clientType}
     handleChange={handleChange}
     hasError={errors.clientType}
     options={[
      { value: 'type1', label: 'Type 1' },
      { value: 'type2', label: 'Type 2' },
      // Add more options as needed
     ]}
     placeholder="Select a client type"
     important
    />
    <CustomInput
     type="select"
     name="clientClassification"
     label="Client Classification"
     value={values.clientClassification}
     handleChange={handleChange}
     hasError={errors.clientClassification}
     options={[
      { value: 'class1', label: 'Classification 1' },
      { value: 'class2', label: 'Classification 2' },
      // Add more options as needed
     ]}
     placeholder="Select a client classification"
     important
    />
   </div>
   <div className="my-4">
    <label className="font-semibold mr-4">Open Savings</label>
    <input
     type="radio"
     name="openSavings"
     value="yes"
     checked={values.openSavings === 'yes'}
     onChange={handleChange}
     className="mr-2"
    />
    Yes
    <input
     type="radio"
     name="openSavings"
     value="no"
     checked={values.openSavings === 'no'}
     onChange={handleChange}
     className="ml-4 mr-2"
    />
    No
    {values.openSavings === 'yes' && (
     <CustomInput
      type="select"
      name="savingsOption"
      label="Savings Option"
      value={values.savingsOption}
      handleChange={handleChange}
      options={[
       { value: 'option1', label: 'Option 1' },
       { value: 'option2', label: 'Option 2' },
       // Add more options as needed
      ]}
      placeholder="Select a savings option"
      important
     />
    )}
   </div>
   <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
    Next
   </button>
  </div>
 )
}

export default General
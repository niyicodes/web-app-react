import React from 'react'
import CustomInput from '../../../components/CustomInput'

const General = ({ nextStep, handleChange, values, errors }) => {
 return (
  <div className="p-4 border-2 border-green-700 w-full">
   <h2 className="text-xl mb-4">General Information</h2>
   {/* names */}
   <div className='formWrapper'>
   <CustomInput
     type="select"
     name="office"
     label="Office"
     value={values.office}
     handleChange={handleChange}
     hasError={errors.office}
     options={[
      { value: 'head office', label: 'Head Office' },
      { value: 'mpape', label: 'Mpape' },
      { value: 'ofisi', label: 'Ofisi' },
      { value: 'office1', label: 'Office 1' },
      { value: 'bwari', label: 'Bwaro' },
      // Add more options as needed
     ]}
     placeholder="Select an office"
     important
    />
    <CustomInput
     type="select"
     name="legal_form"
     label="Legal Form"
     value={values.legal_form}
     handleChange={handleChange}
     hasError={errors.legal_form}
     options={[
      { value: 'person', label: 'Person' },
      { value: 'entity', label: 'Entity' },
     ]}
     placeholder="Select a person"
     important
    />
    <CustomInput
     type="text"
     name="external_id"
     label="External Id"
     value={values.external_id}
     handleChange={handleChange}
     hasError={errors.external_id}
     important
    />
   </div>
   <div className='formWrapper'>
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
   <div className='formWrapper'>
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
     name="staff"
     label="Staff"
     value={values.staff}
     handleChange={handleChange}
     hasError={errors.staff}
     options={[
      { value: 'staff1', label: 'Staff 1' },
      { value: 'staff2', label: 'Staff 2' },
      // Add more options as needed
     ]}
     placeholder="Select a staff"
     important
    />
    <article>
    <label className="font-semibold mr-4">Is staff?</label>
    <input
     type="radio"
     name="isStaff"
     value="yes"
     checked={values.isStaff === 'yes'}
     onChange={handleChange}
     className="mr-2"
    />
    </article>
   </div>
   {/* last info */}
   <div className="formWrapper">
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
    <CustomInput
     type="date"
     name="submittedDate"
     label="Submitted On"
     value={values.submittedDate}
     handleChange={handleChange}
     hasError={errors.submittedDate}
    />
    <article>
    <label className="font-semibold mr-4">Is Active?</label>
    <input
     type="radio"
     name="isActive"
     value="yes"
     checked={values.isActive === 'yes'}
     onChange={handleChange}
     className="mr-2"
    />
    </article>
   </div>
   <div className="my-4">
    <label className="font-semibold mr-4">Open Savings Account</label>
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
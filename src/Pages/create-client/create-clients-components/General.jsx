import React from 'react'
import { TextField, MenuItem } from '@mui/material'
const General = ({ nextStep, handleChange, values, errors }) => {
  const offices = [
    { value: 'head office', label: 'Head Office' },
    { value: 'mpape', label: 'Mpape' },
    { value: 'ofisi', label: 'Ofisi' },
    { value: 'office1', label: 'Office 1' },
    { value: 'bwari', label: 'Bwaro' },
  ]
  return (
    <div className="p-4 w-full">
      <h2 className="text-xl mb-4">General Information</h2>
      {/* names */}
      <div className='formWrapper'>
        <TextField id="office-select" select label="Office" onChange={(e) => handleChange(e, 'office')} error={!!errors.office} required variant="standard" value={values.office}>
          {
            offices.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              )
            })
          }
        </TextField>
        <TextField id="legal-form-select" select label="Legal Form"
          onChange={(e) => handleChange(e, 'legal_form')} required variant="standard" value={values.legal_form} error={!!errors.legal_form}>
          {
            [
              { value: 'person', label: 'Person' },
              { value: 'entity', label: 'Entity' },
            ].map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              )
            })
          }
        </TextField>
        <TextField id="external_id" value={values.external_id}
          onChange={(e) => handleChange(e, 'external_id')} label="External Id" variant="standard" error={!!errors.external_id} />
      </div>
      <div className='formWrapper'>
        <TextField
          id="first-name"
          value={values.firstName}
          onChange={(e) => handleChange(e, 'firstName')}
          label="First Name"
          variant="standard"
          error={!!errors.firstName}
        />
        <TextField
          id="last-name"
          value={values.lastName}
          onChange={(e) => handleChange(e, 'lastName')}
          label="Last Name"
          variant="standard"
          error={!!errors.lastName}
        />
        <TextField
          id="middle-name"
          value={values.middleName}
          onChange={(e) => handleChange(e, 'middleName')}
          label="Middle Name"
          variant="standard"
          error={!!errors.middleName}
        />
      </div>
      {/* other personal info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <TextField
          id="dob"
          value={values.dob}
          onChange={(e) => handleChange(e, 'dob')}
          label="Date of Birth"
          variant="standard"
          type='date'
          error={!!errors.dob}
        />
        <TextField
          id="gender-select"
          select
          label="Gender"
          onChange={(e) => handleChange(e, 'gender')}
          required
          variant="standard"
          value={values.gender}
          error={!!errors.gender}
        >
          {[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {/* more info */}
      <div className='formWrapper'>
        <TextField
          id="email"
          value={values.email}
          onChange={(e) => handleChange(e, 'email')}
          label="Email"
          type='email'
          variant="standard"
          error={!!errors.email}
        />
        <TextField
          id="phone"
          value={values.phone}
          onChange={(e) => handleChange(e, 'phone')}
          label="Phone Number"
          type='tel'
          variant="standard"
          error={!!errors.phone}
        />
        <TextField
          id="staff-select"
          select
          label="Staff"
          onChange={(e) => handleChange(e, 'staff')}
          required
          variant="standard"
          value={values.staff}
          error={!!errors.staff}
        >
          {[
            { value: 'staff1', label: 'Staff 1' },
            { value: 'staff2', label: 'Staff 2' },
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <article>
          <label className="font-semibold mr-4">Is staff?</label>
          <input
            type="radio"
            name="isStaff"
            value="yes"
            checked={values.isStaff === 'yes'}
            onChange={(e) => handleChange(e, 'isStaff')}
            className="mr-2"
          />
        </article>
      </div>
      {/* last info */}
      <div className="formWrapper">
        <TextField id="client-type-select" select label="Client Type" onChange={(e) => handleChange(e, 'clientType')} required variant="standard" value={values.clientType} error={!!errors.clientType}>
          {
            [
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
            ].map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              )
            })
          }
        </TextField>
        <TextField id="client-classification-select" select label="Client Classification" onChange={(e) => handleChange(e, 'clientClassification')} required variant="standard" value={values.clientClassification}>
          {
            [
              { value: 'class1', label: 'Classification 1' },
              { value: 'class2', label: 'Classification 2' },
            ].map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              )
            })
          }
        </TextField>
        <TextField id="submitted-date-select" value={values.submittedDate}
          onChange={(e) => handleChange(e, 'submittedDate')} label="Submitted On" variant="standard" type='date' />
        <article>
          <label className="font-semibold mr-4">Is Active?</label>
          <input
            type="radio"
            name="isActive"
            value="yes"
            checked={values.isActive === 'yes'}
            onChange={(e) => handleChange(e, 'isActive')}
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
          onChange={(e) => handleChange(e, 'openSavings')}
          className="mr-2"
        />
        Yes
        <input
          type="radio"
          name="openSavings"
          value="no"
          checked={values.openSavings === 'no'}
          onChange={(e) => handleChange(e, 'openSavings')}
          className="ml-4 mr-2"
        />
        No
        {values.openSavings === 'yes' && (
          <div className='w-[50%]'>
            <TextField id="saving-option-select" select label="Saving Option" onChange={(e) => handleChange(e, 'savingsOption')} required variant="standard" fullWidth value={values.savingsOption}>
              {
                [
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                ].map((option) => {
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                })
              }
            </TextField>
          </div>

        )}
      </div>
      <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
        Next
      </button>
    </div>
  )
}

export default General
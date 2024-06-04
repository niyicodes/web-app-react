import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const FamilyMembers = ({
  nextStep,
  prevStep,
  familyMembers,
  addFamilyMember,
  updateFamilyMember,
  deleteFamilyMember
}) => {
  const [showForm, setShowForm] = useState(false);
  const [newMember, setNewMember] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    age: '',
    relationship: '',
    gender: '',
    profession: '',
    dob: '',
    isDependent: false,
    qualification: '',
    marital_status: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleNewMemberChange = (e, fieldName) => {
    const { value, type, checked } = e.target;
    setNewMember({
      ...newMember,
      [fieldName]: type === 'checkbox' ? checked : value,
    });
  };

  const submitFamilyMember = () => {
    if (editIndex !== null) {
      updateFamilyMember(editIndex, newMember);
      setEditIndex(null);
    } else {
      addFamilyMember(newMember);
    }
    setNewMember({
      firstName: '',
      lastName: '',
      middleName: '',
      age: '',
      relationship: '',
      gender: '',
      profession: '',
      dob: '',
      isDependent: false,
      qualification: '',
      marital_status: '',
    });
    setShowForm(false);
  };

  const editFamilyMember = (index) => {
    setNewMember(familyMembers[index]);
    setEditIndex(index);
    setShowForm(true);
  };


  return (
    <div className="p-4 w-full">
      <div className='flex justify-between items-center'>
        <h2 className="text-xl mb-4">Family Members</h2>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditIndex(null);
            setNewMember({
              firstName: '',
              lastName: '',
              middleName: '',
              age: '',
              relationship: '',
              gender: '',
              profession: '',
              dob: '',
              isDependent: false,
              qualification: '',
              marital_status: '',
            });
          }}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          {showForm ? 'Cancel' : 'Add Family Member'}
        </button>
      </div>
      {showForm && (
        <div>
          <div className="formWrapper">
            <TextField id="first-name-input" value={newMember.firstName}
              onChange={(e) => handleNewMemberChange(e, 'firstName')} label="First Name" variant="standard" />
            <TextField id="standard-basic" value={newMember.lastName}
              onChange={(e) => handleNewMemberChange(e, 'lastName')} label="Last Name" variant="standard" />
            <TextField id="standard-basic" value={newMember.middleName}
              onChange={(e) => handleNewMemberChange(e, 'middleName')} label="Middle Name" variant="standard" />
          </div>
          <div className="formWrapper">
            <TextField id="age-input" value={newMember.age}
              onChange={(e) => handleNewMemberChange(e, 'age')} name="age"
              label="Age" variant="standard" type='number' />
            <TextField id="relationship-input" value={newMember.relationship}
              onChange={(e) => handleNewMemberChange(e, 'relationship')} name="relationship"
              label="Relationship" variant="standard" />
            <TextField id="gender-input" select name="gender"
              label="Gender" onChange={(e) => handleNewMemberChange(e, 'gender')} required variant="standard" value={newMember.gender}>
              {
                [
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' },
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
          <div className="formWrapper">
            <TextField id="profession-input" value={newMember.profession}
              onChange={(e) => handleNewMemberChange(e, 'profession')} name="profession"
              label="Profession" variant="standard" />
            <TextField id="qualification-input" name="qualification"
              label="Qualification" value={newMember.qualification}
              onChange={(e) => handleNewMemberChange(e, 'qualification')} variant="standard" />
            <TextField id="marital-status-select" select name="marital_status"
              label="Marital Status" onChange={(e) => handleNewMemberChange(e, 'marital_status')} required variant="standard" value={newMember.marital_status}>
              {
                [
                  { value: 'single', label: 'Single' },
                  { value: 'married', label: 'Married' },
                  { value: 'complicated', label: 'Complicated' },
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
          <div className="formWrapper">
            <TextField id="dob-input" value={newMember.dob} name="dob"
              onChange={(e) => handleNewMemberChange(e, 'dob')} label="Date of Birth" variant="standard" type='date' />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isDependent"
              checked={newMember.isDependent}
              onChange={(e) => handleNewMemberChange(e, 'isDependent')}
              className="mr-2"
            />
            <label className="font-semibold">Is Dependent?</label>
          </div>
          <button
            onClick={submitFamilyMember}
            className="bg-green-500 text-white p-2 rounded my-4"
          >
            {editIndex !== null ? 'Update Member' : 'Add Member'}
          </button>
        </div>
      )}
      <TableContainer component={Paper} className='my-4'>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell >Last Name</TableCell>
              <TableCell >Middle Name</TableCell>
              <TableCell >Age</TableCell>
              <TableCell >Relationship</TableCell>
              <TableCell >Gender</TableCell>
              <TableCell >Profession</TableCell>
              <TableCell >Qualification</TableCell>
              <TableCell >Marital Status</TableCell>
              <TableCell >DOB</TableCell>
              <TableCell >Is Dependent</TableCell>
              <TableCell >Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              familyMembers.map((member, index) => (
                <TableRow key={index}>
                  <TableCell component='th'>{member.firstName}</TableCell>
                  <TableCell component='th'>{member.lastName}</TableCell>
                  <TableCell component='th'>{member.middleName}</TableCell>
                  <TableCell component='th'>{member.age}</TableCell>
                  <TableCell component='th'>{member.relationship}</TableCell>
                  <TableCell component='th'>{member.gender}</TableCell>
                  <TableCell component='th'>{member.profession}</TableCell>
                  <TableCell component='th'>{member.qualification}</TableCell>
                  <TableCell component='th'>{member.marital_status}</TableCell>
                  <TableCell component='th'>{member.dob}</TableCell>
                  <TableCell component='th'>{member.isDependent ? 'Yes' : 'No'}</TableCell>
                  <TableCell component='th'>
                    <div className="flex justify-end">
                      <button
                        onClick={() => editFamilyMember(index)}
                        className="bg-yellow-500 text-white p-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteFamilyMember(index)}
                        className="bg-red-500 text-white p-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded mr-2">
        Back
      </button>
      <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
        Next
      </button>
    </div>
  );
};

export default FamilyMembers;

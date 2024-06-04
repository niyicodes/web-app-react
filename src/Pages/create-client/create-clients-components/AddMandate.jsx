import React, { useState } from "react";
import { TextField, MenuItem } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AddMandate = ({
  nextStep,
  prevStep,
  mandate,
  addMandate,
  updateMandate,
  deleteMandate,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    relationship: "",
    gender: "",
    signature: null,
    passport: null,
    meansOfId: null,
    dob: "",
    address: "",
    nin: "",
    bvn: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleNewMemberChange = (e, fieldName) => {
    const { value, type, checked, files } = e.target;
    setNewMember({
      ...newMember,
      [fieldName]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const submitMandate = () => {
    if (editIndex !== null) {
      updateMandate(editIndex, newMember);
      setEditIndex(null);
    } else {
      addMandate(newMember);
    }
    setNewMember({
      firstName: "",
      lastName: "",
      middleName: "",
      phone: "",
      relationship: "",
      gender: "",
      signature: null,
      passport: null,
      meansOfId: null,
      dob: "",
      address: "",
      nin: "",
      bvn: "",
    });
    setShowForm(false);
  };

  const editMandate = (index) => {
    setNewMember(mandate[index]);
    setEditIndex(index);
    setShowForm(true);
  };


  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl mb-4">Mandates</h2>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditIndex(null);
            setNewMember({
              firstName: "",
              lastName: "",
              middleName: "",
              phone: "",
              relationship: "",
              gender: "",
              signature: null,
              passport: null,
              meansOfId: null,
              dob: "",
              address: "",
              nin: "",
              bvn: "",
            });
          }}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          {showForm ? "Cancel" : "Add a Mandate"}
        </button>
      </div>
      <section>
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
              <TextField id="standard-basic" value={newMember.phone}
                onChange={(e) => handleNewMemberChange(e, 'phone')} name="phone"
                label="Phone Number" variant="standard" type='tel' />
            </div>
            <div className="formWrapper">
              <TextField id="address-input" value={newMember.address}
                onChange={(e) => handleNewMemberChange(e, 'address')} label="Address" variant="standard" />
              <TextField id="nin-input" value={newMember.nin}
                onChange={(e) => handleNewMemberChange(e, 'nin')} label="NIN" variant="standard" />
              <TextField id="bvn-input" value={newMember.bvn}
                onChange={(e) => handleNewMemberChange(e, 'bvn')} label="BVN" variant="standard" />
            </div>

            <TextField id="dob-input" value={newMember.dob} name="dob"
              onChange={(e) => handleNewMemberChange(e, 'dob')} label="Date of Birth" variant="standard" type='date' />
            <div className="formWrapper">
              <label className="block mb-2 font-bold">Passport</label>
              <input
                type="file"
                name="passport"
                onChange={handleNewMemberChange}
                className="mb-4"
              />
              {newMember.passport && (
                <img
                  src={URL.createObjectURL(newMember.passport)}
                  alt="Passport Preview"
                  className="mb-4 w-32 h-32 object-cover"
                />
              )}
            </div>
            <div className="formWrapper">
              <label className="block mb-2 font-bold">Signature</label>
              <input
                type="file"
                name="signature"
                onChange={handleNewMemberChange}
                className="mb-4"
              />
              {newMember.signature && (
                <img
                  src={URL.createObjectURL(newMember.signature)}
                  alt="Signature Preview"
                  className="mb-4 w-32 h-32 object-cover"
                />
              )}
            </div>
            <div className="formWrapper">
              <label className="block mb-2 font-bold">Means of ID</label>
              <input
                type="file"
                name="meansOfId"
                onChange={handleNewMemberChange}
                className="mb-4"
              />
              {newMember.meansOfId && (
                <img
                  src={URL.createObjectURL(newMember.meansOfId)}
                  alt="Means of ID Preview"
                  className="mb-4 w-32 h-32 object-cover"
                />
              )}
            </div>
            <button
              onClick={submitMandate}
              className="bg-green-500 text-white p-2 rounded mt-4"
            >
              {editIndex !== null ? "Update Mandate" : "Add Mandate"}
            </button>
          </div>
        )}
      </section>
      <TableContainer component={Paper} className='my-4'>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell >Last Name</TableCell>
              <TableCell >Middle Name</TableCell>
              <TableCell >Relationship</TableCell>
              <TableCell >Gender</TableCell>
              <TableCell >Phone number</TableCell>
              <TableCell >Address</TableCell>
              <TableCell >NIN</TableCell>
              <TableCell >BVN</TableCell>
              <TableCell >Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              mandate.map((mandate, index) => (
                <TableRow key={index}>
                  <TableCell component='th'>{mandate.firstName}</TableCell>
                  <TableCell component='th'>{mandate.lastName}</TableCell>
                  <TableCell component='th'>{mandate.middleName}</TableCell>
                  <TableCell component='th'>{mandate.relationship}</TableCell>
                  <TableCell component='th'>{mandate.gender}</TableCell>
                  <TableCell component='th'>{mandate.phone}</TableCell>
                  <TableCell component='th'>{mandate.address}</TableCell>
                  <TableCell component='th'>{mandate.nin}</TableCell>
                  <TableCell component='th'>{mandate.bvn}</TableCell>
                  <TableCell component='th'>
                    <div>
                      <button
                        onClick={() => editMandate(index)}
                        className="bg-yellow-500 text-white p-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteMandate(index)}
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
      <button
        onClick={prevStep}
        className="bg-gray-500 text-white p-2 rounded mr-2"
      >
        Back
      </button>
      <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
        Next
      </button>
    </div>
  );
};

export default AddMandate;

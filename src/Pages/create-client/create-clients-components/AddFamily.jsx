import React, { useState } from 'react'
import CustomInput from '../../../components/CustomInput';

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
 });
 const [editIndex, setEditIndex] = useState(null);

 const handleNewMemberChange = (e) => {
  const { name, value, type, checked } = e.target;
  setNewMember({
   ...newMember,
   [name]: type === 'checkbox' ? checked : value,
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
  });
  setShowForm(false);
 };

 const editFamilyMember = (index) => {
  setNewMember(familyMembers[index]);
  setEditIndex(index);
  setShowForm(true);
 };

 return (
  <div className="p-4 border-2 border-red-500 w-full">
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
       });
      }}
      className="bg-blue-500 text-white p-2 rounded mb-4"
     >
      {showForm ? 'Cancel' : 'Add Family Member'}
     </button>
   </div>
   {showForm && (
    <div className="formWrapper">
     <CustomInput
      type="text"
      name="firstName"
      label="First Name"
      value={newMember.firstName}
      handleChange={handleNewMemberChange}
      important
     />
     <CustomInput
      type="text"
      name="lastName"
      label="Last Name"
      value={newMember.lastName}
      handleChange={handleNewMemberChange}
      important
     />
     <CustomInput
      type="text"
      name="middleName"
      label="Middle Name"
      value={newMember.middleName}
      handleChange={handleNewMemberChange}
     />
     <CustomInput
      type="number"
      name="age"
      label="Age"
      value={newMember.age}
      handleChange={handleNewMemberChange}
      important
     />
     <CustomInput
      type="text"
      name="relationship"
      label="Relationship"
      value={newMember.relationship}
      handleChange={handleNewMemberChange}
      important
     />
     <CustomInput
      type="select"
      name="gender"
      label="Gender"
      value={newMember.gender}
      handleChange={handleNewMemberChange}
      options={[
       { value: 'male', label: 'Male' },
       { value: 'female', label: 'Female' },
       { value: 'other', label: 'Other' },
      ]}
      placeholder="Select a gender"
      important
     />
     <CustomInput
      type="text"
      name="profession"
      label="Profession"
      value={newMember.profession}
      handleChange={handleNewMemberChange}
      important
     />
     <CustomInput
      type="date"
      name="dob"
      label="Date of Birth"
      value={newMember.dob}
      handleChange={handleNewMemberChange}
      important
     />
     <div className="flex items-center">
      <input
       type="checkbox"
       name="isDependent"
       checked={newMember.isDependent}
       onChange={handleNewMemberChange}
       className="mr-2"
      />
      <label className="font-semibold">Is Dependent?</label>
     </div>
     <button
      onClick={submitFamilyMember}
      className="bg-green-500 text-white p-2 rounded mt-4"
     >
      {editIndex !== null ? 'Update Member' : 'Add Member'}
     </button>
    </div>
   )}
   <div>
    {familyMembers.length > 0 && (
     <div className="mb-4">
      <h3 className="text-lg mb-2">Added Family Members</h3>
      <ul>
       {familyMembers.map((member, index) => (
        <li key={index} className="mb-2 flex justify-between items-center">
         <span>
          {member.firstName} {member.lastName}, {member.relationship}, {member.gender}
         </span>
         <div>
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
        </li>
       ))}
      </ul>
     </div>
    )}
   </div>
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
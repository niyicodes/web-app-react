import React, { useState } from 'react'
import CustomInput from '../../../components/CustomInput';

const AddMandate = ({
 nextStep,
 prevStep,
 mandate,
 addMandate,
 updateMandate,
 deleteMandate
}) => {
 const [showForm, setShowForm] = useState(false);
 const [newMember, setNewMember] = useState({
  firstName: '',
  lastName: '',
  middleName: '',
  phone: '',
  relationship: '',
  gender: '',
  signature: '',
  passport:'',
  meansOfId:'',
  dob: '',
  address:''
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
    updateMandate(editIndex, newMember);
   setEditIndex(null);
  } else {
    addMandate(newMember);
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

 const editMandate = (index) => {
  setNewMember(mandate[index]);
  setEditIndex(index);
  setShowForm(true);
 };

 return (
  <div className="p-4 w-full">
   <div className='flex justify-between items-center'>
     <h2 className="text-xl mb-4">Mandates</h2>
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
      {showForm ? 'Cancel' : 'Add a Mandate'}
     </button>
   </div>
   <section>
     {showForm && (
      <div>
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
        </div>
       <button
        onClick={submitFamilyMember}
        className="bg-green-500 text-white p-2 rounded mt-4"
       >
        {editIndex !== null ? 'Update Member' : 'Add Member'}
       </button>
      </div>
     )}
   </section>
   <div>
    {
      mandate.map((x,y)=>{
        return(
          <div key={y}>
            <p>{x.name}</p>
          </div>
        )
      })
    }
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

export default AddMandate;
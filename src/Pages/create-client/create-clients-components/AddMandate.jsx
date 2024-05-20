import React, { useState } from "react";
import CustomInput from "../../../components/CustomInput";

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
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleNewMemberChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setNewMember({
      ...newMember,
      [name]:
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

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
                placeholder="Select a gender"
                important
              />
              <CustomInput
                type="text"
                name="phone"
                label="Phone Number"
                value={newMember.phone}
                handleChange={handleNewMemberChange}
                important
              />
              <CustomInput
                type="text"
                name="address"
                label="Address"
                value={newMember.address}
                handleChange={handleNewMemberChange}
                important
              />
              <CustomInput
                type="text"
                name="nin"
                label="NIN"
                value={newMember.nin}
                handleChange={handleNewMemberChange}
                important
              />
              <CustomInput
                type="text"
                name="bvn"
                label="BVN"
                value={newMember.bvn}
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
      <div>
        {mandate.map((member, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-gray-100 p-2 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <span>
                {member.firstName} {member.lastName}
              </span>
              <button className="p-1">
                {expandedIndex === index ? "▲" : "▼"}
              </button>
            </div>
            {expandedIndex === index && (
              <div className="bg-gray-200 p-2">
                <p>
                  <strong>First Name:</strong> {member.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {member.lastName}
                </p>
                <p>
                  <strong>Middle Name:</strong> {member.middleName}
                </p>
                <p>
                  <strong>Phone:</strong> {member.phone}
                </p>
                <p>
                  <strong>Relationship:</strong> {member.relationship}
                </p>
                <p>
                  <strong>Gender:</strong> {member.gender}
                </p>
                <p>
                  <strong>DOB:</strong> {member.dob}
                </p>
                <p>
                  <strong>Address:</strong> {member.address}
                </p>
                <p>
                  <strong>NIN:</strong> {member.nin}
                </p>
                <p>
                  <strong>BVN:</strong> {member.bvn}
                </p>
                <p>
                  <strong>Passport:</strong>{" "}
                  {member.passport ? member.passport.name : "Not uploaded"}
                </p>
                <p>
                  <strong>Signature:</strong>{" "}
                  {member.signature ? member.signature.name : "Not uploaded"}
                </p>
                <p>
                  <strong>Means of ID:</strong>{" "}
                  {member.meansOfId ? member.meansOfId.name : "Not uploaded"}
                </p>
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
            )}
          </div>
        ))}
      </div>
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

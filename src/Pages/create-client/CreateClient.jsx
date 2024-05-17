import React, { useState } from 'react'
import General from './create-clients-components/General'
import AddAddress from './create-clients-components/AddAddress';
import FamilyMembers from './create-clients-components/AddFamily';

const CreateClient = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    office: '',
    legalForm: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    clientType: '',
    clientClassification: '',
    openSavings: 'no',
    savingsOption: '',
    clientAddress: ''
  });
  const [entries, setEntries] = useState([]);
  const [errors, setErrors] = useState({});
  const [familyMembers, setFamilyMembers] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };


  const addFamilyMember = (member) => {
    setFamilyMembers([...familyMembers, member]);
  };

  const updateFamilyMember = (index, updatedMember) => {
    const updatedMembers = familyMembers.map((member, i) =>
      i === index ? updatedMember : member
    );
    setFamilyMembers(updatedMembers);
  };

  const deleteFamilyMember = (index) => {
    const updatedMembers = familyMembers.filter((_, i) => i !== index);
    setFamilyMembers(updatedMembers);
  };

  const validate = () => {
    const newErrors = {};
    let errorStep = null;

    if (!values.firstName) {
      newErrors.firstName = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.lastName) {
      newErrors.lastName = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.office) {
      newErrors.office = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.legalForm) {
      newErrors.legalForm = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.dob) {
      newErrors.dob = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.gender) {
      newErrors.gender = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.email) {
      newErrors.email = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.phone) {
      newErrors.phone = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.clientType) {
      newErrors.clientType = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.clientAddress) {
      newErrors.clientAddress = true;
      if (!errorStep) errorStep = 1;
    }
    if (!values.clientClassification) {
      newErrors.clientClassification = true;
      if (!errorStep) errorStep = 1;
    }
    if (values.openSavings === 'yes' && !values.savingsOption) {
      newErrors.savingsOption = true;
      if (!errorStep) errorStep = 1;
    }

    setErrors(newErrors);
    return errorStep;
  };


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFinalSubmit = () => {
    const errorStep = validate();
    console.log("Error Step:", errorStep); // Debugging: Check which step has an error
    console.log("Errors:", errors); // Debugging: Check the errors object
    console.log("Values:", values); // Debugging: Check the current values

    if (errorStep === null) {
      alert('Form submitted successfully!');
    } else {
      setStep(errorStep);
    }
  };

  switch (step) {
    case 1:
      return <General nextStep={nextStep} handleChange={handleChange} values={values} errors={errors} />;
    case 2:
      return (
        <FamilyMembers
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
          errors={errors}
          familyMembers={familyMembers}
          addFamilyMember={addFamilyMember}
          updateFamilyMember={updateFamilyMember}
          deleteFamilyMember={deleteFamilyMember}
        />
      );
    case 3:
      return (
        <AddAddress
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
          handleFinalSubmit={handleFinalSubmit}
          errors={errors}
        />
      );
    default:
      return <div>Error: Invalid step</div>;
  }
};

export default CreateClient;

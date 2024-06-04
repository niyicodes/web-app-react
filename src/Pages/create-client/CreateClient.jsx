import React, { useState } from "react";
import General from "./create-clients-components/General";
import AddAddress from "./create-clients-components/AddAddress";
import FamilyMembers from "./create-clients-components/AddFamily";
import AddMandate from "./create-clients-components/AddMandate";

const CreateClient = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    office: "",
    legal_form: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    clientType: "",
    clientClassification: "",
    openSavings: "no",
    savingsOption: "",
    clientAddress: "",
  });
  const [errors, setErrors] = useState({});
  const [familyMembers, setFamilyMembers] = useState([]);
  const [mandates, setMandates] = useState([]);

  const handleChange = (e, fieldName) => {
    const { type, checked, value } = e.target;
    setValues({
      ...values,
      [fieldName]: type === "checkbox" ? checked : value,
    });
    if (errors[fieldName]) {
      setErrors({
        ...errors,
        [fieldName]: false,
      });
    }
  };


  const addFamilyMember = (member) => {
    setFamilyMembers([...familyMembers, member]);
  };
  const addMandate = (mandate) => {
    setMandates([...mandates, mandate]);
  };
  const updateMandate = (index, updatedMandate) => {
    const updatedMandates = mandates.map((mandate, i) =>
      i === index ? updatedMandate : mandate
    );
    setMandates(updatedMandates);
  };

  const deleteMandate = (index) => {
    const updatedMandates = mandates.filter((_, i) => i !== index);
    setMandates(updatedMandates);
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
    if (!values.legal_form) {
      newErrors.legal_form = true;
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
    if (values.openSavings === "yes" && !values.savingsOption) {
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
    if (errorStep === null) {
      alert("Form submitted successfully!");
    } else {
      setStep(errorStep);
    }
  };

  switch (step) {
    case 1:
      return (
        <div className="containerClass">
          <General
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            errors={errors}
          />
        </div>
      );
    case 2:
      return (
        <div className="containerClass">
          <FamilyMembers
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
            familyMembers={familyMembers}
            addFamilyMember={addFamilyMember}
            updateFamilyMember={updateFamilyMember}
            deleteFamilyMember={deleteFamilyMember}
          />
        </div>
      );
    case 3:
      return (
        <div className="containerClass">
          <AddMandate
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
            mandate={mandates}
            addMandate={addMandate}
            updateMandate={updateMandate}
            deleteMandate={deleteMandate}
          />
        </div>
      );
    case 4:
      return (
        <div className="containerClass">
          <AddAddress
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            handleFinalSubmit={handleFinalSubmit}
            errors={errors}
          />
        </div>
      );
    default:
      return (
        <div className="containerClass">
          Error: Invalid step
        </div>
      );
  }
};

export default CreateClient;

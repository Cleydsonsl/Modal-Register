import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const Register: React.FC = () => {

  const [values, setValues] = useState({
    id: '',
    name: '',
    date_birth: '',
    sex: [ 
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    email: '',
    cpf: '',
    date_start: '',
    team: [
      { value: 'frontEnd', label: 'Front-End' },
      { value: 'backEnd', label: 'Back-End' },
      { value: 'mobile', label: 'Mobile' },
    ],
  });

  const handleNameInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }))
  }
  const handleDateBirthInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
    event.persist();
    setValues((values) => ({
      ...values,
      date_birth: event.target.value,
    }))
  }
  const handleEmailInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }))
  }
  const handleCpfInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
    event.persist();
    setValues((values) => ({
      ...values,
      cpf: event.target.value,
    }))
  }
  const handleDateStartInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
    event.persist();
    setValues((values) => ({
      ...values,
      date_start: event.target.value,
    }))
  }

  const [submitted, setSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valid, setValid] = useState(false);
  const [newRegister, setNewRegister] = useState('');
  const [register, setRegister] = useState([]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(values.name && values.date_birth && values.sex && values.email 
      && values.cpf && values.date_start ) {
        setValid(true);
      }
    setSubmitted(true);
  };

  return (
    <>
      <h1>Register</h1>
    </>
  )
}

export default Register;
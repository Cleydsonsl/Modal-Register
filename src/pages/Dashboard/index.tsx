import React, {useState} from 'react';
import { FiTrash } from 'react-icons/fi';
import Select from 'react-select';
import Modal from 'react-modal';

import "./style.css";
import { Title , RegisterForm} from './style';

const Dashboard: React.FC = () => {

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

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  const [submitted, setSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valid, setValid] = useState(false);
  const [newRegister, setNewRegister] = useState('');
  const [register, setRegister] = useState([]);

  function handleAddRegister() {

  }

  return (
    <>
      <Title>
      Register your account!
      <button onClick={() => setModalIsOpen(true)}>Register</button>
      </Title>
      
      <RegisterForm>
        <a href="node">
          <div>
            <strong>Cleydson Souza</strong>
            <p>05/03</p>
            <p>Sex</p>
            <p>email</p>
            <p>cpf</p>
            <p>start date</p>
            <p>team</p>
          </div>

          <FiTrash size={20}/>
        </a>
      </RegisterForm>
      <Modal isOpen={modalIsOpen} 
          shouldCloseOnOverlayClick={false} 
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
          <div>
            <div>
              <input id="name" className="form-field" type="text" placeholder="Your Name"
                name="name" value={values.name} onChange={(e) => setNewRegister(e.target.value)}
              />
              { submitted && !values.name ? <span>Please enter a your name</span>: null }
            </div>
            <div>
              <input id="date_birth" className="form-field" type="date" placeholder="Your birth date"
                name="date_birth" value={values.date_birth} onChange={(e) => setNewRegister(e.target.value)}
              />
              { submitted && !values.date_birth ? <span>Please enter a your date birh</span>: null }
            </div>
            <div>
            <Select 
              className="sex"
              options={values.sex}
            />
            { submitted && !values.sex ? <span>Please select a your sex</span>: null }
            </div>
            <div>
            <input id="email" className="form-field" type="text" placeholder="Email"
              name="email" value={values.email} onChange={(e) => setNewRegister(e.target.value)}
            />
            { submitted && !values.email ? <span>Please enter a your e-mail</span>: null }
            </div>
            <div>
            <input id="cpf" className="form-field" type="text" placeholder="CPF"
              name="cpf" value={values.cpf} onChange={handleCpfInputChange}
            />
            { submitted && !values.cpf ? <span>Please enter a your CPF</span>: null }
            </div>
            <div>
              <input id="date_start" className="form-field" type="date" 
              placeholder="Date Start" name="date_start" value={values.date_start}
              onChange={handleDateStartInputChange}
              />
              { submitted && !values.date_start ? <span>Please enter a your date start</span>: null }
            </div>
            <div>
              <Select 
                className="team"
                options={values.team}
              />
              { submitted && !values.team ? <span>Please select a your team</span>: null }
            </div>
            <div>
              <button className="form-field" type="submit">Register</button>
              <button className="form-field" onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
        </div>
      </ Modal>
    </>
  );
}

export default Dashboard;
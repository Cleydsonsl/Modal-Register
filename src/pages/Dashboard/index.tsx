import React, {useState} from 'react';
import { FiTrash } from 'react-icons/fi';
import Modal from 'react-modal';

import logo from '../../assets/nutcache.png'
import Register from '../Register/index'

import { Title, Form , RegisterForm} from './style';

const Dashboard: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [newRegister, setNewRegister] = useState([]);

  function handleAddNewRegister() {

  }

  return (
    <>
      <Modal isOpen={modalIsOpen} 
          shouldCloseOnOverlayClick={false} 
          onRequestClose={() => setModalIsOpen(false)}
          style={
            {
              overlay: {
                backgroundColor: 'darkgray'
              }
            }
          }
        >
      </ Modal>
      <img src={logo} alt="NutCache"/>
      <Title>Register your account HERE!</Title>
      <Form>
        <button onClick={() => setModalIsOpen(true)}>Register</button>
      </Form>

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
    </>
  );
}

export default Dashboard;
import React, { useState } from 'react';
import Select from 'react-select';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter> 
      <Routes /> 
    </BrowserRouter>
    <GlobalStyle />
  </>
); 

export default App;

// Modal.setAppElement('#root')

// function App() {
//   const [values, setValues] = useState({
//     id: '',
//     name: '',
//     date_birth: '',
//     sex: [ 
//       { value: 'male', label: 'Male' },
//       { value: 'female', label: 'Female' },
//     ],
//     email: '',
//     cpf: '',
//     date_start: '',
//     team: [
//       { value: 'frontEnd', label: 'Front-End' },
//       { value: 'backEnd', label: 'Back-End' },
//       { value: 'mobile', label: 'Mobile' },
//     ],
//   });

//   const handleNameInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
//     event.persist();
//     setValues((values) => ({
//       ...values,
//       name: event.target.value,
//     }))
//   }
//   const handleDateBirthInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
//     event.persist();
//     setValues((values) => ({
//       ...values,
//       date_birth: event.target.value,
//     }))
//   }
//   const handleEmailInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
//     event.persist();
//     setValues((values) => ({
//       ...values,
//       email: event.target.value,
//     }))
//   }
//   const handleCpfInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
//     event.persist();
//     setValues((values) => ({
//       ...values,
//       cpf: event.target.value,
//     }))
//   }
//   const handleDateStartInputChange = (event: { persist: () => void; target: { value: any; }; }) =>{
//     event.persist();
//     setValues((values) => ({
//       ...values,
//       date_start: event.target.value,
//     }))
//   }

//   const [submitted, setSubmitted] = useState(false);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [valid, setValid] = useState(false);
//   const [newRegister, setNewRegister] = useState('');
//   const [register, setRegister] = useState([]);

//   function handleAddRegister() {

//   }

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     if(values.name && values.date_birth && values.sex && values.email 
//       && values.cpf && values.date_start ) {
//         setValid(true);
//       }
//     setSubmitted(true);
//   };

//   return (
//     <div className="App">
//       <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
//       <Modal isOpen={modalIsOpen} 
//       shouldCloseOnOverlayClick={false} 
//       onRequestClose={() => setModalIsOpen(false)}
//       style={
//         {
//           overlay: {
//             backgroundColor: 'darkgray'
//           }
//         }
//       }
//       > 
      
//         <form className="register-form" onSubmit={handleSubmit}>
//         { submitted && valid ? <div className="success-message">Success! Thank you for registering</div>: null }
//           <h2>Modal title</h2>
//           <input id="name" className="form-field" type="text" placeholder="Your Name"
//             name="name" value={values.name} onChange={handleNameInputChange}
//           />
//           { submitted && !values.name ? <span>Please enter a your name</span>: null }

//           <input id="date_birth" className="form-field" type="date" placeholder="Your birth date"
//             name="date_birth" value={values.date_birth} onChange={handleDateBirthInputChange}
//           />
//           { submitted && !values.date_birth ? <span>Please enter a your date birh</span>: null }

//           <Select 
//             className="sex"
//             options={values.sex}
//           />
//           { submitted && !values.sex ? <span>Please select a your sex</span>: null }

//           <input id="email" className="form-field" type="text" placeholder="Email"
//             name="email" value={values.email} onChange={handleEmailInputChange}
//           />
//           { submitted && !values.email ? <span>Please enter a your e-mail</span>: null }

//           <input id="cpf" className="form-field" type="text" placeholder="CPF"
//             name="cpf" value={values.cpf} onChange={handleCpfInputChange}
//           />
//           { submitted && !values.cpf ? <span>Please enter a your CPF</span>: null }

//           <input id="date_start" className="form-field" type="date" 
//           placeholder="Date Start" name="date_start" value={values.date_start}
//           onChange={handleDateStartInputChange}
//           />
//           { submitted && !values.date_start ? <span>Please enter a your date start</span>: null }

//           <Select 
//             className="team"
//             options={values.team}
//           />
//           { submitted && !values.team ? <span>Please select a your team</span>: null }
          
//           <div>
//             <button className="form-filed" type="submit">Register</button>
//             <button onClick={() => setModalIsOpen(false)}>Close</button>
//           </div>
//         </form>
//       </Modal>
      
//     </div>
//   );
// }


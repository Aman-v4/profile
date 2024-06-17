// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Editwork from './Editwork';
import Editeducation from './Editeducation';
import Editlink from './Editlink';
import Editprofile from './Editprofile';
import Editresume from './Editresume';
import Modal from './Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(null);

  const closeModal = () => setModalOpen(null);

  return (
    <Router>
      <div className="relative">
        <Profile onOpenModal={setModalOpen} />
        
        <Modal isOpen={modalOpen === 'Editwork'} onClose={closeModal}>
          <Editwork />
        </Modal>
        
        <Modal isOpen={modalOpen === 'Editeducation'} onClose={closeModal}>
          <Editeducation />
        </Modal>
        
        <Modal isOpen={modalOpen === 'Editlink'} onClose={closeModal}>
          <Editlink />
        </Modal>
        
        <Modal isOpen={modalOpen === 'Editprofile'} onClose={closeModal}>
          <Editprofile />
        </Modal>
        
        <Modal isOpen={modalOpen === 'Editresume'} onClose={closeModal}>
          <Editresume />
        </Modal>
      </div>
    </Router>
  );
}

export default App;

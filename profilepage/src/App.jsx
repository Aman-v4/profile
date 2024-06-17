import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Profile from './Profile'
import Editwork from './Editwork';
import Editeducation from './Editeducation';
import Editlink from './Editlink';
import Editprofile from './Editprofile';
import Editresume from './Editresume';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/Editwork' element={<Editwork />} />
          <Route path='/Editeducation' element={<Editeducation />} />
          <Route path='/Editlink' element={<Editlink />} />
          <Route path='/Editprofile' element={<Editprofile />} />
          <Route path='/Editresume' element={<Editresume />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
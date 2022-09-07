import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './ui/Header';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

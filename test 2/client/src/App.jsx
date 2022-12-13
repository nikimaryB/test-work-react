import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details/Details';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Details />} path="/:id/details" />

    </Routes>
  );
}

export default App;

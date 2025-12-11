/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Entry from './components/Entry';
import NavMenu from './components/NavMenu';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

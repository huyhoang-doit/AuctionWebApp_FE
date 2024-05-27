import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RouterComAdmin from './router-admin';
import RouterComManager from './router-manager';
import Login from './Login'; // Adjust the path if necessary

const RouterCom = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<RouterComAdmin />} />
      <Route path="/manager/*" element={<RouterComManager />} />
      {/* Add other routes here as needed */}
    </Routes>
  );
};

export default RouterCom;

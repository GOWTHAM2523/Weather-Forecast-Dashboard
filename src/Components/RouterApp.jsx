import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
  );
}

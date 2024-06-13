// import { useState } from 'react'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AuthProvider from "./provider/authProvider";
import Routes from "./router";
// import Login from './components/Login/Login'
// import Dashboard from './components/Dashboard/Dashboard'
// import Profile from './components/Profile/Profile'
// import Register from './components/Register/Register'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes />
      </LocalizationProvider>
    </AuthProvider>
  );
}

export default App

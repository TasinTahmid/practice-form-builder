import React from 'react';
import { BrowserRouter, Route, Routes, useRou} from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import { AuthProvider } from './components/auth';
import RequireAuth from './components/RequireAuth';
import StaticForm from './pages/static';
import CreatePage from './pages/create';
import FormDemo from './pages/formdemo';

const App = () =>{
  return (

    <AuthProvider>
      
      <div>
        <Routes>
          <Route path = '/' exact element={<Home/>} />
          <Route path = 'Home' exact element={<Home/>} />
          <Route path = 'login' exact element={<Login/>} />
          <Route path = 'register' exact element={<Register/>} />
          <Route path = 'dashboard' exact element={<RequireAuth><Dashboard /></RequireAuth>} />
            
          <Route path = '/static-form' exact element={<StaticForm/>} />
          <Route path = '/create-page' exact element={<CreatePage/>} />
          <Route path = '/formdemo/:id' exact element={<FormDemo/>} />
        </Routes>

      </div>
      
    </AuthProvider>
  )
}

export default App;
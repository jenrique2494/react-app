import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import logo from '../logo.svg'
import { RegisterPage, FormikBasicPage,FormikYupPage, FormikComponents, FormikAbstraction } from '../03-forms/pages';


export const Navigation = ()=> {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React-logo"/>
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/register" end>Register Page</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/formik-basic" end>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/formik-yup" end>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/formik-components" end>Formik Components</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/formik-abstraction" end>Formik Abstraction</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/formik-basic" element={<FormikBasicPage />}/>
          <Route path="/formik-yup" element={<FormikYupPage/>}/>  
          <Route path="/formik-components" element={<FormikComponents/>}/>  
          <Route path="/formik-abstraction" element={<FormikAbstraction/>}/>  
        </Routes>
      </div>
    </Router>
  );
}
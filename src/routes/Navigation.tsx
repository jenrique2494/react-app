import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import logo from '../logo.svg'
import { RegisterPage, FormikBasicPage,FormikYupPage, FormikComponents, FormikAbstraction, RegisterFormikPage, DynamicForm } from '../03-forms/pages';



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
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/formik-register" end>Register Formik Page</NavLink>
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
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/dynamic-form" end>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/formik-register" element={<RegisterFormikPage/>}/>
          <Route path="/formik-basic" element={<FormikBasicPage />}/>
          <Route path="/formik-yup" element={<FormikYupPage/>}/>  
          <Route path="/formik-components" element={<FormikComponents/>}/>  
          <Route path="/formik-abstraction" element={<FormikAbstraction/>}/>  
          <Route path="/dynamic-form" element={<DynamicForm/>}/>  
        </Routes>
      </div>
    </Router>
  );
}
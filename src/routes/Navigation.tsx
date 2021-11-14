import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink
} from 'react-router-dom';
import logo from '../logo.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const Navigation = ()=> {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React-logo"/>
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/lazy1" end>Lazy1</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/lazy2" end>Lazy2</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'nav-active' : '' }  to="/lazy3" end>Lazy3</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/lazy1" element={<LazyPage1/>}/>
          <Route path="/lazy2" element={<LazyPage2/>}/>
          <Route path="/lazy3" element={<LazyPage3/>}/>  
        </Routes>
      </div>
    </Router>
  );
}
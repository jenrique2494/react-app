
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate
} from 'react-router-dom';
import logo from '../logo.svg'
import { routes } from './routes';

export const Navigation = ()=> {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <Router>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React-logo"/>
          <ul>
            {
              routes.map(({path,name})=>(
                <li key={name}>
                  <NavLink 
                    key={name} 
                    className={({ isActive }) => isActive ? 'nav-active' : '' }  
                    to={path} 
                    >
                    {name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <Routes>
          {
            routes.map(({path,component: Component,name})=>(
              <Route 
                path={path} 
                element={<Component/>}
                key={name}
              />
            ))
          }
          <Route path='*' element={<Navigate replace to={routes[2].path} />} />
        </Routes>
      </div>
    </Router>
    </Suspense>
  );
}
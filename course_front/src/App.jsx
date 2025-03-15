import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Head from './Head'
import Login from './Login'
import "./App.css"
import { NavProvider } from './Context/Navcontext'
import Signup from './Signup'
import Preview from './Preview'
import Details from './Details'
import User from './User'
import { createContext } from 'react'
import { useState } from 'react'
import LogOut from './Logout'
import Details_login from './Details_login'
import Payment from './Payment'
import Profile from './Profile'
export const loginContext = createContext();
function App() {
  const [login, setLogin] = useState(false);
  const [uname, setUsername] = useState("");
  return (
    <>
      <loginContext.Provider value={{ login: login, setLogin: setLogin, uname: uname, setUsername: setUsername }}>
        <NavProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Head />}>
                <Route index element={<Home />}></Route>
                <Route path=":username" element={<User />}>            
                </Route>
              </Route>
              <Route path='/user' element={<Head />}>
                <Route path='signup' element={<Signup />}></Route>
                <Route path='signin' element={<Login />}></Route>
                <Route path='signout' element={<LogOut />}></Route>
              </Route>
              <Route path='/course' element={<Head />}>
                <Route path='preview' element={<Preview />}></Route>
                <Route path='preview/:id' element={<Details />}></Route>
              </Route>
              <Route path=':username/course' element={<Head />}>
                <Route path='preview' element={<Preview />}></Route>
                <Route path='preview/:id' element={<Details_login />}></Route>
                <Route path='preview/:id/payment' element={<Payment />}></Route>
              </Route>
              <Route path=':username/profile' element={<Head />}>
                <Route index element={<Profile />}></Route>
                <Route path='course/:id' element={<Details_login/>}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </NavProvider>
      </loginContext.Provider>
    </>
  )
}

export default App

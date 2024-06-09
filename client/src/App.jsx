import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateUser from './pages/CreateUser'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import { Toaster } from 'react-hot-toast'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Error from './pages/Error'


function App() {

  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/create" element = {<CreateUser />} />
        <Route path = "/users" element = {<ProtectedRoutes><Users /></ProtectedRoutes>} />
        <Route path = "/users/:userName" element = {<UserDetails />} />
        <Route path = "*" element = {<Error />} />
      </Routes>
    </Router>
  )
}

export default App

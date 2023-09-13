import { BrowserRouter, Navigate, Route ,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Rent from "./pages/Rent"
import Buy from './pages/Buy'
import Resources from './pages/Resources'
import ManageProperty from './pages/ManageProperty'
import Login from './pages/Login'
import AppLayout from './ui/AppLayout'
import Signup from './pages/SIgnup'
import Rentee from './pages/Rentee'
import UserDasboard from './ui/UserDashboard'

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route index element={<Navigate replace to="homepage"/>}/>
      <Route path='homepage' element={<Homepage/>}/>
      <Route path='rent' element={<Rent/>}/>
      <Route path='buy' element={<Buy/>}/>
      <Route path='manage' element={<ManageProperty/>}/>
      <Route path='resources' element={<Resources/>}/>
      </Route>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route element={<Rentee/>}>
        <Route path='user_dashboard' element={<UserDasboard/>}/>

      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App

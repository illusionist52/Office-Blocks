import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Rent from "./pages/Rent"
import Buy from './pages/Buy'
import Resources from './pages/Resources'
import ManageProperty from './pages/ManageProperty'

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path='rent' element={<Rent/>}/>
      <Route path='buy' element={<Buy/>}/>
      <Route path='manage' element={<ManageProperty/>}/>
      <Route path='resources' element={<Resources/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App

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
import SingleProperty from './pages/SingleProperty'
import Renter from './pages/Renter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import Properties from './pages/Properties'
import AddPropModal from './ui/AddPropModal'
import Property from './pages/SingleProperty'
import Form from './ui/Form'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});


function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
   <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route index element={<Navigate replace to="homepage"/>}/>
      <Route path='homepage' element={<Homepage/>}/>
      <Route path='rent' element={<Rent/>}/>
      <Route path='buy' element={<Buy/>}/>
      <Route path='manage' element={<ManageProperty/>}/>
      <Route path='resources' element={<Resources/>}/>
      <Route path='addprop' element={<Form/>}/>
      </Route>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='user_dashboard' element={<UserDasboard/>}/>
      <Route path='renter_dashboard' element={<Renter/>}/>
      <Route path='properties' element={<Properties/>}/>
      <Route path='properties/:propertyId' element={<Property/>}/>
    </Routes>
   </BrowserRouter>
   <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success:{
            duration:3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            backgroundColor: "white",
            color: "#333",
          }
        }}
      />
   </QueryClientProvider>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound/NotFound'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Player from '../pages/Player/Player'
import PublicRoute from '../components/PublicRoute/PublicRoute'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'


const AppRoutes = ({currentUser}) => {

  return (
    <>
    <Routes>
      <Route path='/login' element={<PublicRoute user={currentUser}><Login/></PublicRoute>}/>

      <Route path='/' element={<ProtectedRoute user={currentUser}><Home/></ProtectedRoute>}/>
      <Route path='/player/:id' element={<ProtectedRoute user={currentUser}><Player/></ProtectedRoute>}/>
       
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default AppRoutes

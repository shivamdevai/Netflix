import React, { useEffect, useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Loader from './components/Loader/Loader'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false); // auth check complete
    })
     return () => unsubscribe()
  }, [])

  

if (loading) {
  return <Loader />;
}

  return (
    <>
     <ToastContainer />
      <AppRoutes currentUser={currentUser}/>
    </>
    
  )
}

export default App

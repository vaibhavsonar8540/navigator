
import AllRoute from './AllRoute'
import './App.css'
import { AuthContextProvider } from './Context/AuthContext'
import NavbarPage from './Components/Navbar'



function App() {


  return (
    <AuthContextProvider>
          <NavbarPage />
          <AllRoute/>
    </AuthContextProvider>
  )
}

export default App

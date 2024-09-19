import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import SignIn from './pages/signin'
import Dashboard from './pages/dashboard'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/schedule' element={<SignIn/>}/>
        <Route path='/FAQ' element={<SignIn/>}/>
        <Route path='/notifications' element={<SignIn/>}/>
        <Route path='/students' element={<SignIn/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App

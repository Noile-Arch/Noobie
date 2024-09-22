import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import SignIn from './pages/signin'
import Dashboard from './pages/dashboard'
import SchedulePage from './pages/schedule'
import FAQPage from './pages/faq'
import NotificationsPage from './pages/notifications'
import StudentsPage from './pages/students'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/schedule' element={<SchedulePage/>}/>
        <Route path='/FAQ' element={<FAQPage/>}/>
        <Route path='/notifications' element={<NotificationsPage/>}/>
        <Route path='/students' element={<StudentsPage/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App

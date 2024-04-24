import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import StudentDashboard from './components/student/StudentDashboard'
import AdminDashboard from './components/admin/AdminDashboard'
import AddStudent from './components/admin/AddStudent'
import AdminNavbar from './components/admin/AdminNavbar'
import ResetPassword from './components/ResetPassword'
import RequestToAdmin from './components/student/RequestToAdmin'
function App() {
  return (
    <>
      {/* <AdminNavbar/> */}
      <BrowserRouter>
        <Routes>
          <Route
            path = '/'
            element = {<RequestToAdmin/>}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path = '/reset-password'
            element = {<ResetPassword/>}
          />
          <Route
            path='/student-dashboard'
            element={<StudentDashboard />}
          />
          <Route
            path='/admin-dashboard'
            element={<AdminDashboard />}
          />
          <Route
            path='/admin-dashboard/add-student'
            element={<AddStudent />}
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

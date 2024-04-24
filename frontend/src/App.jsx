import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import StudentDashboard from './components/student/StudentDashboard'
import AdminDashboard from './components/admin/AdminDashboard'
import AddStudent from './components/admin/AddStudent'
import AdminNavbar from './components/admin/AdminNavbar'
import ResetPassword from './components/ResetPassword'
import RequestToAdmin from './components/student/RequestToAdmin'
import { AdminContext } from './context/AdminContext'
import { useAdminContext } from './hooks/useAdminContext'
function App() {
  const {user} = useAdminContext();
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
            element={!user? <Login /> : (user.userType == 'student'? <StudentDashboard/> : <AdminDashboard/>)}
          />
          <Route
            path = '/reset-password'
            element = {<ResetPassword/>}
          />
          <Route
            path='/student-dashboard'
            element={user && user.userType == 'student'? <StudentDashboard/> : <Login/>}
          />
          <Route
            path='/admin-dashboard'
            element={user && user.userType == 'admin'? <AdminDashboard/> : <Login/>}
          />
          <Route
            path='/admin-dashboard/add-student'
            element={user && user.userType == 'admin'? <AddStudent/> : <Login/>}
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import StudentDashboard from './components/student/StudentDashboard'
import AdminDashboard from './components/admin/AdminDashboard'
import AddStudent from './components/admin/AddStudent'
import AdminNavbar from './components/admin/AdminNavbar'
import ResetPassword from './components/ResetPassword'
import RequestToAdmin from './components/student/RequestToAdmin'
import { AdminContext } from './context/AdminContext'
import { useAdminContext } from './hooks/useAdminContext'
import UpdatePassword from './components/admin/UpdatePasswrod'
import AdminHomePage from './components/admin/AdminHomePage'
import Notifications from './components/admin/Notifications'
import Profile from './components/student/Profile'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const {user} = useAdminContext();
  return (
    <>
      <ToastContainer/>
      {/* <AdminNavbar/> */}
      <BrowserRouter>
        <Routes>
          <Route
            path = '/'
            element = {!user? <Home/> : (user.userType == 'student'? <Navigate to = '/student-dashboard'/> : <Navigate to = '/admin-home-page'/>)}
          />
          <Route
            path = '/request-admin'
            element = {<RequestToAdmin/>}
          />
          <Route
            path='/login'
            element={!user? <Login /> : (user.userType == 'student'? <Navigate to = '/student-dashboard'/> : <Navigate to = '/admin-home-page'/>)}
          />
          <Route
            path = '/reset-password'
            element = {<ResetPassword/>}
          />
          <Route
            path='/student-dashboard'
            //conditon add kro when user log in for first time
            element={user && user.userType == 'student'? <StudentDashboard/> : <Navigate to = '/'/>}
          />
          <Route
            path = '/student-dashboard/profile'
            element = {user && user.userType == 'student'? <Profile/> : <Navigate to = '/'/>}
          />
          {/* <Route
            path='/admin-dashboard'
            //conditon add kro when user log in for first time
            element={user && user.userType == 'admin'? <AdminDashboard/> : <Navigate to = '/login'/>}
          /> */}
          <Route
            path='/admin-home-page/add-student'
            element={user && user.userType == 'admin'? <AddStudent/> : <Navigate to = '/'/>}
          />
          <Route
            path = '/admin-home-page/update-password'
            element = {user && user.userType == 'admin'? <UpdatePassword/> : <Navigate to = '/'/>}
          />
          <Route
            path= '/admin-home-page'
            element={user && user.userType == 'admin'? <AdminHomePage/> : <Navigate to = '/'/>}
            >
          </Route>
          <Route
             path='/admin-home-page/notifications'
             element={user && user.userType == 'admin'? <Notifications/> : <Navigate to = '/'/>}
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

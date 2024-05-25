import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../hooks/useAdminContext";
const PORT = import.meta.env.VITE_DOMAIN;

// export default function StudentDashboard() {
//     const {dispatch}= useAdminContext();
//     const [user, setUser] = useState({
//         username: '',
//         email: '',
//     })
//     const navigate = useNavigate();

//     const getStudentProfile = async () => {
//         try {
//             const response = await axios.get(`${PORT}/api/student/dashboard`);
//             const student = response.data.message
//             console.log(student)
//             setUser({
//                 ...user,
//                 username: student.username,
//                 email: student.email,
//             });

//         } catch (error) {
//             console.log(error.message)
//         }

//     }
//     useEffect(() => {
//         getStudentProfile();
//     }, [])

//     const onLogout = async () => {
//         try {
//             const res = await axios.get(`${PORT}/api/user/logout`)
//             dispatch({type:"LOGOUT"});
//             navigate('/login')
//             console.log(res.data)

//         } catch (error) {
//             console.log(error.message);
//         }
//     }
//     return (
//         <>
//             <button
//                 onClick={onLogout}
//                 className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Log out</button>

//             <h1>{user.username ? user.username : ''}</h1>
//             <h1>{user.email ? user.email : ''}</h1>
//         </>
//     )
// }

import React from 'react';
import { FaHome, FaRedo, FaMoneyCheckAlt } from 'react-icons/fa';

export default function StudentDashboard() {
    const {dispatch}= useAdminContext();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
    })
    const navigate = useNavigate();

    const getStudentProfile = async () => {
        try {
            const response = await axios.get(`${PORT}/api/student/dashboard`);
            const student = response.data.message
            console.log(student)
            setUser({
                ...user,
                username: student.username,
                email: student.email,
            });

        } catch (error) {
            console.log(error.message)
        }

    }
    // useEffect(() => {
    //     getStudentProfile();
    // }, [])
    const onLogout = async () => {
                try {
                    const res = await axios.get(`${PORT}/api/user/logout`)
                    dispatch({type:"LOGOUT"});
                    navigate('/login')
                    console.log(res.data)
        
                } catch (error) {
                    console.log(error.message);
                }
            }
  return (
    <div className="flex font-sans">
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">MNNIT Intern Portal</h1>
        <nav className="flex-1">
          <div className="flex items-center mb-4 cursor-pointer hover:text-blue-400">
            <FaHome size={20} />
            <button className="ml-3"
            onClick={(e) => navigate('/student-dashboard')}
            >Dashboard</button>
          </div>
          <div className="flex items-center mb-4 cursor-pointer hover:text-blue-400">
            <FaRedo size={20} />
            <button className="ml-3"
            onClick={(e) => navigate('/student-dashboard/profile')}
            >Profile</button>
          </div>
          <div className="flex items-center mb-4 cursor-pointer hover:text-blue-400">
            <FaMoneyCheckAlt size={20} />
            <span className="ml-3">Notifications</span>
          </div>
          <div className="flex items-center mb-4 cursor-pointer hover:text-blue-400">
            <FaMoneyCheckAlt size={20} />
            <button className="ml-3"
            onClick={onLogout}
            >Logout</button>
          </div>
        </nav>
        <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Dark Mode</button>
      </aside>
      <main className="flex-1 p-6 bg-zinc-900">
        <div className='flex space-x-4 '>
        <div className="bg-gray-800 p-4 rounded flex items-center mb-6">
          <img src="https://via.placeholder.com/60" alt="Profile" className="rounded-full w-16 h-16 mr-4" />
          <div>
            <h3 className="text-lg font-bold">{user.name ? user.name : ''}</h3>
            <p>Student id: {user.username ? user.username : ''}</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded mb-6">
          <h3 className="text-lg font-bold mb-2">Academic details</h3>
          <p>Bachelor of Computer Applications (B.C.A 2022-2025)</p>
          <p>SDJ International College, Surat, Vesu</p>
          <p>Sem 3</p>
        </div>
        </div>
        
      </main>
    </div>
  );
};


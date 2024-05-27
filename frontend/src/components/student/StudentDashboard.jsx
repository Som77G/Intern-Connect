import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../hooks/useAdminContext";
const PORT = import.meta.env.VITE_DOMAIN;

import React from 'react';
import { FaHome, FaRedo, FaMoneyCheckAlt } from 'react-icons/fa';

export default function StudentDashboard() {
  const { dispatch } = useAdminContext();
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
      dispatch({ type: "LOGOUT" });
      navigate('/')
      console.log(res.data)

    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <nav className="flex justify-between py-4 px-10 lg:px-16 shadow-2xl rounded" >
        <div className="text-3xl font-bold text-purple-600">SIP Portal</div>
        <button
          className="bg-yellow-500 text-black py-2 px-6 rounded-2xl hover:bg-yellow-600"
          onClick={(e) => onLogout()}>Log Out</button>

      </nav>
      <section className="flex flex-col lg:flex-row py-1 bg-blueGray-50">
        <div className='shadow-lg shadow-zinc-950'>
          <aside className="w-20 lg:w-60 text-white p-6 flex flex-col">
            <nav className="flex flex-row justify-between lg:flex-col">
              <div className="flex items-center mb-4 ml-5 lg:ml-10 cursor-pointer hover:text-blue-400">
                <FaHome size={20} />
                <button className="mr-4 ml-1 lg:mx-3"
                  onClick={(e) => navigate('/student-dashboard')}
                >Dashboard</button>
              </div>
              <div className="flex items-center mb-4 ml-5 lg:ml-10 cursor-pointer hover:text-blue-400">
                <FaRedo size={20} />
                <button className="mr-4 ml-1 lg:mx-3"
                  onClick={(e) => navigate('/student-dashboard/profile')}
                >Profile</button>
              </div>
              <div className="flex items-center mb-4 ml-5 lg:ml-10 cursor-pointer hover:text-blue-400">
                <FaMoneyCheckAlt size={20} />
                <span className="mr-4 ml-1 lg:mx-3">Notifications</span>
              </div>

            </nav>
          </aside>
        </div>
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
      </section>
    </>
  );
};


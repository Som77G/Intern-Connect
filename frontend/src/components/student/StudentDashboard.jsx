import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../hooks/useAdminContext";
const PORT = import.meta.env.VITE_DOMAIN;

import React from 'react';
import { FaHome, FaRedo, FaMoneyCheckAlt } from 'react-icons/fa';

export default function StudentDashboard() {
  const { user: loginUser , dispatch } = useAdminContext();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    college: '',
    course: '',
    branch: '',
    year: '',
    cpi: '',
    credit: '',
    profilePicturePath: '#',

    resumePath: '',
    project1: {
      githubLink: '',
      projectLink: '',
      demoLink: ''
    },
    project2: {
      githubLink: '',
      projectLink: '',
      demoLink: ''
    },
    gitHub: '',
    linkedIn: '',

    phoneNumber: '',
    address: '',
    city: '',
    country: '',
    postalCode: ''
  })
  const navigate = useNavigate();

  const getStudentProfile = async () => {
    try {
      const userid = loginUser.userid
      const response = await axios.get(`${PORT}/api/student/dashboard?userid=${encodeURIComponent(userid)}`);
      const student = response.data.message
      console.log(student)
      setUser({
        ...user,
        username: student.username,
        email: student.email,
        firstName: student.first_name,
        lastName: student.last_name,
        college: student.college,
        course: student.course,
        branch: student.branch,
        year: student.year,
        cpi: student.cpi,
        credit: student.credit,
        profilePicturePath: student.profile_picture,

        resumePath: student.resume,
        project1: {
          githubLink: student.project1_github_link,
          projectLink: student.project1_project_link,
          demoLink: student.project1_demo_link
        },
        project2: {
          githubLink: student.project2_github_link,
          projectLink: student.project2_project_link,
          demoLink: student.project2_demo_link
        },
        gitHub: student.github,
        linkedIn: student.linkedin,

        phoneNumber: student.phoneNumber,
        address: student.address,
        city: student.city,
        country: student.country,
        postalCode: student.postal_code
      });

    } catch (error) {
      console.log(error.message)
    }

  }
  useEffect(() => {
    getStudentProfile();
  }, [])
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
      <nav className="flex justify-between py-4 px-10 lg:px-16 shadow-lg rounded" >
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
        <div className="w-full p-6 lg:w-2/4 mx-auto bg-zinc-900 text-white">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 my-auto flex justify-center bg-cover bg-center">
              <img src={user.profilePicturePath} alt="Profile Picture" className="w-1/2 md:w-1/3 lg:w-full object-cover" />
            </div>
            <div className="w-2/3 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-lg font-semibold">WELCOME</h3>

                <div>
                  <h2 className="text-2xl font-semibold text-white">{user ? user.firstName + " " + user.lastName : ""}</h2>
                  <p className="text-sm text-white">{user ? user.username : ""}</p>
                </div>

              </div>
              <div className="mt-4">
                <h3 className="text-white text-lg font-semibold">Education</h3>
                <div className="mt-2">
                  <p className="text-white">{user ? user.course + " " : ""} in</p>
                  <p className="text-white">{user ? user.branch : ""}</p>
                  <p className="text-white">{user ? user.college : ""}</p>
                  <p className="text-white">Batch of {user ? user.year : ""}</p>


                </div>
              </div>

            </div>
          </div>
          <div className="p-6 my-6 border-t border-gray-200">
            <div className="flex justify-between">
              <div>
                <h3 className="text-gray-800 text-lg font-semibold">Social Profiles</h3>
                <p className="mt-2 text-gray-600"><strong>Email: </strong>{user ? user.email : ""}</p>
                <p className="mt-2 text-gray-600"><strong>GitHub: </strong>{user ? user.gitHub : ""}</p>
                <p className="mt-2 text-gray-600"><strong>LinkedIn: </strong>{user ? user.linkedIn : ""}</p>
              </div>
              <div>
                <h3 className="text-gray-800 text-lg font-semibold">Scores</h3>
                <p className="mt-2 text-gray-600"><strong>CPI: </strong>{user ? user.cpi : ""}</p>
                <p className="mt-2 text-gray-600"><strong>SIP Credits: </strong>{user ? user.credit : ""}</p>
              </div>
            </div>
            <hr className="my-10"></hr>
            <div className="pdf-viewer">
              {user.resumePath ? (
                <iframe
                  src={user.resumePath}
                  width="100%"
                  height="300px"
                  title="PDF Viewer"
                />
              ) : (
                <p>Loading PDF...</p>
              )}
            </div>
            <hr className="my-10"></hr>
            <div>
              <h3 className="text-gray-800 text-lg font-semibold">Contact Information</h3>
              <p className="mt-2 text-gray-600"><strong>Phone Number: </strong>{user ? user.phoneNumber : ""}</p>
              <p className="mt-2 text-gray-600"><strong>Address: </strong>{user ? user.address : ""}</p>
              <p className="mt-2 text-gray-600"><strong>City: </strong>{user ? user.city : ""}</p>
              <p className="mt-2 text-gray-600"><strong>Country: </strong>{user ? user.country : ""}</p>
              <p className="mt-2 text-gray-600"><strong>Postal Code: </strong>{user ? user.postalCode : ""}</p>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};


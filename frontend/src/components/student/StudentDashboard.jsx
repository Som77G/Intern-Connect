import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../hooks/useAdminContext";
const PORT = import.meta.env.VITE_DOMAIN;

import React from 'react';
import { FaHome, FaRedo, FaMoneyCheckAlt } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { BiSolidNotification } from "react-icons/bi";

export default function StudentDashboard() {
  const { user: loginUser, dispatch } = useAdminContext();
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
      <section className="flex flex-col lg:flex-row py-1 bg-zinc-900">
        <div className='shadow-lg shadow-zinc-950'>
          <aside className="w-20 lg:w-60 text-white p-6 flex flex-col">
            <nav className="flex flex-row justify-between md:flex-col">
              <div className="flex items-center mb-4 ml-5 lg:ml-10 cursor-pointer hover:text-blue-400">
                <MdDashboard size={20} />
                <button className="mr-4 ml-1 lg:mx-3"
                  onClick={(e) => navigate('/student-dashboard')}
                >Dashboard</button>
              </div>
              <div className="flex items-center mb-4 ml-5 lg:ml-10 cursor-pointer hover:text-blue-400">
                <GrUpdate size={20} />
                <button className="mr-4 ml-1 lg:mx-3"
                  onClick={(e) => navigate('/student-dashboard/profile')}
                >Profile</button>
              </div>
              {/* <div className="flex items-center mb-4 ml-5 lg:ml-10 cursor-pointer hover:text-blue-400">
                <BiSolidNotification size={20} />
                <span className="mr-4 ml-1 lg:mx-3">Notifications</span>
              </div> */}
               <div className="flex items-center mb-4 ml-5 lg:ml-10 cursor-pointer hover:text-blue-400">
                <GrUpdate size={20} />
                <button className="mr-4 ml-1 lg:mx-3"
                  onClick={(e) => navigate('/user/job/getAll')}
                >All Jobs</button>
              </div>
              <div className="flex items-center mb-4 ml-5 lg:ml-10 cursor-pointer hover:text-blue-400">
                <GrUpdate size={20} />
                <button className="mr-4 ml-1 lg:mx-3"
                  onClick={(e) => navigate('/user/application/me')}
                >Applications</button>
              </div>
            </nav>
          </aside>
        </div>
        
        <div className="w-full m-2 border border-zinc-700 rounded">
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

        <main className="profile-page p-3">
          <section className="relative block h-500-px">
            <div className="absolute top-0 w-full h-screen flex items-center justify-center bg-center bg-cover" 
            style={{backgroundImage:"url('https://cdn.hackernoon.com/images/77fdrPu4ybMLx0OjzBBTzNBhT1f2-4qc3e1d.jpeg')", height:"50%"}}>
              <span id="blackOverlay" className="w-full h-full absolute opacity-35 bg-black"></span>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>

              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-2 bg-gray-300">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-zinc-900 w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img alt="..." src={user.profilePicturePath}  className="shadow-xl rounded-full h-40 w-40 align-middle object-cover border-none absolute -m-16 max-w-150-px" />
                      </div>
                    </div>
                    <div className="w-full text-center lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                      <div className="mt-32 sm:mt-0">
                        <div className="md:mt-32 lg:mt-0 tracking-widest leading-normal text-blueGray-400 font-bold uppercase">
                          Student Id : {user.username}
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user.credit}</span>
                          <span className="text-sm text-blueGray-400">SIP Credis</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user.cpi}</span>
                          <span className="text-sm text-blueGray-400">Current CPI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-200">
                      {user.firstName + " " + user.lastName}
                    </h3>
                    <div className="text-sm tracking-widest leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      {user.course + " in " + user.branch}
                    </div>
                    <div className="text-sm tracking-widest leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      from
                    </div>
                    <div className="text-sm tracking-widest leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      {user.college}
                    </div>
                    <div className="mb-2 text-blueGray-400 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      Batch of : {user.year}
                    </div>
                    
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        
                        Projects
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="w-full lg:w-3/4 px-4">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user.phoneNumber}</span>
                          <span className="text-sm text-blueGray-400">Phone Number</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user.email}</span>
                          <span className="text-sm text-blueGray-400">email</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user.gitHub}</span>
                          <span className="text-sm text-blueGray-400">GitHub</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user.linkedIn}</span>
                          <span className="text-sm text-blueGray-400">LinkedIn</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="relative bg-gray-300 pt-8 pb-6 mt-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                      All rights reserverd.
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </section>
        </main>
        </div>

      </section>
    </>
  );
};


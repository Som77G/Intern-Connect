import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../hooks/useAdminContext";
import AsideBar from "./AsideBar";
import { useLogout } from "../../hooks/useLogout";

const PORT = import.meta.env.VITE_DOMAIN;

import React from 'react';
import { MdDashboard } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { BiSolidNotification } from "react-icons/bi";
import ProfileCard from "./ProfileCard";
import ShowProjects from "./ShowProjects";

export default function StudentDashboard() {
  const { user: loginUser, dispatch } = useAdminContext();
  const { logout } = useLogout()
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
    logout()
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
        </main>
        </div>
      </section>
    </>
  );
};


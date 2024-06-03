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
        <AsideBar/>
        
        <div className="mx-10 my-4 border rounded border-spacing-4 border-zinc-600 flex flex-col w-full lg:flex-row">
          <div className="w-3/5"><ProfileCard profile={user} /></div>
          <div className="border-l my-4 border-stone-500"></div>
          <div className="w-2/5 mt-8 ">
            
            <div className="w-full"><ShowProjects project={user.project1} /></div>
            <div className="w-full"><ShowProjects project={user.project2} /></div>
            <div className="mx-4 mt-8 flex justify-center items-center h-96">
              <iframe className="w-full h-full border-none" src={user.resumePath}></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};


import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import Notifications from "./Notifications";
import { useAdminContext } from "../../hooks/useAdminContext";
export default function AdminNavbar() {
    const {user}= useAdminContext();
    useEffect(()=>{
       
    }, [user])
    return (
        <>
            <nav>
                {/* <div classNameName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div classNameName="flex justify-between">
                    <div classNameName="flex space-x-4">
                        <NavLink to="/admin-home-page">
                           Home
                        </NavLink>
                        <NavLink to="/admin-home-page/add-student">
                            Add Student
                        </NavLink>
                        <NavLink to="/admin-home-page/update-password">
                          Update Credentials
                        </NavLink>
                        <NavLink to="/admin-home-page/analysis">
                            Analysis
                        </NavLink>
                        <NavLink to="/admin-home-page/notifications">
                            Notifications
                        </NavLink>
                    </div>
                </div>
            </div> */}

                <div className="border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li className="me-2">
                            <NavLink to="/admin-home-page" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            >

                                <svg className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>Home
                            </NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink
                                to="/admin-home-page/add-student"
                                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                                aria-current="page"
                            >
                                <svg
                                    className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                Add Student
                            </NavLink>
                        </li>

                        <li className="me-2">
                            <NavLink to="/admin-home-page/update-password" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                <svg className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                                </svg>Update Credentials
                            </NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink to="/admin-home-page/analysis" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                <svg className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>Analysis
                            </NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink to="/user/job/getAll" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                <svg className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>All Jobs
                            </NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink
                                to="/admin-home-page/notifications"
                                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            >
                                <svg
                                    className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 24a2.007 2.007 0 002-2h-4a2.007 2.007 0 002 2zm6-6v-5a6 6 0 00-4-5.74V5a4 4 0 00-8 0v2.26A6 6 0 006 13v5l-2 2v1h16v-1zm-2 1H8v-6a4 4 0 018 0v6z" />
                                </svg>
                                Notifications
                            </NavLink>
                        </li>
                        {/* <li className="me-2">
                            <NavLink to="/user/job/getAll" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                <svg className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>All Jobs
                            </NavLink>
                        </li> */}
                        <li className="me-2">
                            <NavLink to="/user/applications/me" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                <svg className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                                {user && user.userType==="admin" ?
                                `Applicant's Applications`
                                : `My Applications`}
                            </NavLink>
                        </li>
                        {user && user.userType=== "admin" ? (
                        <>
                        <li className="me-2">
                            <NavLink to="/admin-home-page/job/post" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                <svg className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>Post New Job
                            </NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink to="/admin-home-page/job/me" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                                <svg className="w-4 h-4 me-2 text-white group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>View Your Jobs
                            </NavLink>
                        </li>
                        </>
                        ):(
                          <></>
                        )
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}
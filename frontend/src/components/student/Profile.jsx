import { useNavigate } from 'react-router-dom';
import { FaHome, FaRedo, FaMoneyCheckAlt } from 'react-icons/fa';
import { useState } from 'react';


export default function Profile() {
    const navigate = useNavigate();
    const [studentProfile, setStudentProfile] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        college: '',
        branch: '',
        year: '',
        cpi: '',
        profilePicture: '',

        resume: '',
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

        address: '',
        city: '',
        country: '',
        postalCode: ''
    })
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
                <div className="w-full lg:w-7/12 px-4 mt-6 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-blueGray-100 border-0">

                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-blueGray-400 text-sm mt-0 lg:mt-10 mb-6 font-bold uppercase">User Information</h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="username">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                id="username"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.username}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, username: e.target.value })}

                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.email}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="first-name">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.firstName}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, firstName: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="last-name">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.lastName}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, lastName: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-8/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="last-name">
                                                College
                                            </label>
                                            <input
                                                type="text"
                                                id="college"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.college}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, college: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="last-name">
                                                Branch
                                            </label>
                                            <input
                                                type="text"
                                                id="branch"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.branch}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, branch: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="last-name">
                                                Year of Passout
                                            </label>
                                            <input
                                                type="number"
                                                id="year"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.year}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, year: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="last-name">
                                                CPI (latest)
                                            </label>
                                            <input
                                                type="number"
                                                id="cpi"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.cpi}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, cpi: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-8/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="last-name">
                                                Profile Picture
                                            </label>

                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">

                                                        <input
                                                            className=""
                                                            type="file"
                                                            name="file-upload"
                                                            id="file-upload"
                                                            accept="image/*"
                                                            value={studentProfile.profilePicture}
                                                            onChange={(e) => setStudentProfile({ ...studentProfile, profilePicture: e.target.value })}
                                                            required />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Academic Information</h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="address">
                                                Resume
                                            </label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">

                                                        <input
                                                            className=""
                                                            type="file"
                                                            name="file-upload"
                                                            id="file-upload"
                                                            accept="application/pdf"
                                                            value={studentProfile.resume}
                                                            onChange={(e) => setStudentProfile({ ...studentProfile, resume: e.target.value })}
                                                            required />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="city">
                                                Project 1
                                            </label>
                                            <input
                                                type="text"
                                                id="githubLink"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.project1.githubLink}
                                                placeholder='GitHub Link'
                                                onChange={(e) => setStudentProfile({
                                                    ...studentProfile, project1: {
                                                        ...studentProfile.project1, githubLink: e.target.value
                                                    }
                                                })}
                                            />
                                        </div>

                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="city">
                                                Project 2
                                            </label>
                                            <input
                                                type="text"
                                                id="githubLink"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.project2.githubLink}
                                                placeholder='GitHub Link'
                                                onChange={(e) => setStudentProfile({
                                                    ...studentProfile, project2: {
                                                        ...studentProfile.project2, githubLink: e.target.value
                                                    }
                                                })}
                                            />
                                        </div>

                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">

                                            <input
                                                type="text"
                                                id="demoLink"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.project1.demoLink}
                                                placeholder='Demo Link'
                                                onChange={(e) => setStudentProfile({
                                                    ...studentProfile, project1: {
                                                        ...studentProfile.project1, demoLink: e.target.value
                                                    }
                                                })}
                                            />
                                        </div>

                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">

                                            <input
                                                type="text"
                                                id="demoLink"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.project2.demoLink}
                                                placeholder='Demo Link'
                                                onChange={(e) => setStudentProfile({
                                                    ...studentProfile, project2: {
                                                        ...studentProfile.project2, demoLink: e.target.value
                                                    }
                                                })}
                                            />
                                        </div>

                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">

                                            <input
                                                type="text"
                                                id="projectLink"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.project1.projectLink}
                                                placeholder='Project Link'
                                                onChange={(e) => setStudentProfile({
                                                    ...studentProfile, project1: {
                                                        ...studentProfile.project1, projectLink: e.target.value
                                                    }
                                                })}
                                            />
                                        </div>

                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-5">

                                            <input
                                                type="text"
                                                id="projectLink"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.project2.projectLink}
                                                placeholder='Project Link'
                                                onChange={(e) => setStudentProfile({
                                                    ...studentProfile, project2: {
                                                        ...studentProfile.project2, projectLink: e.target.value
                                                    }
                                                })}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Social Platforms</h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-5/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="country">
                                                Github
                                            </label>
                                            <input
                                                type="text"
                                                id="gitHub"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.gitHub}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, gitHub: e.target.value })}
                                            />
                                        </div>
                                    </div>




                                    <div className="w-full lg:w-7/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="postal-code">
                                                LinkedIn
                                            </label>
                                            <input
                                                type="text"
                                                id="linkedIn"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.linkedIn}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, linkedIn: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>



                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Contact Information</h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="address">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                id="address"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.address}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, address: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="city">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                id="city"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.city}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, city: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="country">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                id="country"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.country}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, country: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-5">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="postal-code">
                                                Postal Code
                                            </label>
                                            <input
                                                type="text"
                                                id="postal-code"
                                                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={studentProfile.postalCode}
                                                onChange={(e) => setStudentProfile({ ...studentProfile, postalCode: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />


                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
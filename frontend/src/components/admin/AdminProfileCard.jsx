import { useEffect, useState } from "react"
import axios from "axios"
import { useAdminContext } from "../../hooks/useAdminContext"
import { FaLinkedin } from "react-icons/fa";

const PORT = import.meta.env.VITE_DOMAIN;


export default function AdminProfileCard() {
    const {user:loginUser, dispatch} = useAdminContext();
    const [profile, setProfile] = useState({
        first_name : '',
        last_name : '',
        designation : '',
        phone_number : '',
        linkedin : '',
        profile_picture_path : '',
        email : '',
        username : '',
    });
    const getAdminProfile = async () => {
        try {
          const userid = loginUser.userid
          const response = await axios.get(`${PORT}/api/admin/dashboard?userid=${encodeURIComponent(userid)}`);
          const admin = response.data.message
          console.log(admin)
          
          setProfile({
            ...profile,
            first_name : admin.first_name,
            last_name : admin.last_name,
            designation : admin.designation,
            phone_number : admin.phone_number,
            linkedin : admin.linkedin,
            profile_picture_path : admin.profile_picture_path,
            email : admin.email,
            username : admin.username
          })
        } catch (error) {
          console.log(error.message)
        }
    
      }

      useEffect(() => {
        getAdminProfile();
      }, [])
    return (
        <>
            <div
                className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-zinc-900 shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <img className=" bg-cover bg-center w-full " src='https://as2.ftcdn.net/v2/jpg/01/25/89/77/1000_F_125897775_QBoZEjLEaoDKZf62lhlFBIDYOniHDwKU.jpg' alt='FAANG'/>
                </div>
                <div className="text-white mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-black">
                    <img className="object-cover h-32 w-32" src={profile.profile_picture_path} alt='Student Profile'/>
                </div>
                <div className="text-center mt-2">
                    <div className="flex flex-wrap justify-center ">
                    <div className="font-semibold text-gray-50 text-2xl">{profile.first_name + " " + profile.last_name}</div>
                    <div><a href={profile.linkedin} target="_blank"><FaLinkedin className="text-white text-2xl mt-1 mx-2"/></a></div>
                    </div>
                    
                    <p className="text-gray-300 mt-2">Admin ID: {profile.username}</p>
                    <p className="text-gray-300 mt-4">{profile.designation}</p>
                    
                </div>

                <hr className="mt-4"/>
                <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                    <li className="flex flex-col items-center justify-around">
                        <div className="text-gray-300">{profile.phone_number}</div>
                        <div className="text-gray-400 text-sm">Phone Number</div>
                    </li>
                    <li className="flex flex-col items-center justify-around">
                        <div className="text-gray-300">{profile.email}</div>
                        <div className="text-gray-400 text-sm">Email</div>
                    </li>
                    
                </ul>
                

                
            </div>
        </>
    )
}
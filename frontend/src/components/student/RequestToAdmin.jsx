import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../hooks/useAdminContext';
import UseSocketSetup from '../../hooks/UseSocketSetup';
import getSocketInstance from '../../socket';
axios.defaults.withCredentials= true;
const PORT = import.meta.env.VITE_DOMAIN;

const schema = yup.object().shape({
    username: yup.string().required('Username is required').max(50, 'Username must be at most 50 characters'),
    message: yup.string()
    .required('Message is required')
    .max(255, 'Message must be at most 255 characters')
});
export default function RequestToAdmin() {
    const {user, dispatch}= useAdminContext();
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);
    const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)

    });
    const messageObject={to_username: "admin01", from_username:username, message: message};
    useEffect(()=>{
         console.log("helllo buddy")
         try{
         if (user) {
            const socket= getSocketInstance();
         socket.connect();
         socket.emit("message_sent", messageObject);
         
         // console.log(state);
         console.log("Running")

         //save message within the database
         const response = axios.post(`${PORT}/api/anonymous/reset_password_message`, messageObject);
         console.log("Message is being saved");
         }
        }catch(error){
            console.log("message failed to save");
        }
    }, [user])
   
    const onSubmit = async () => {
        setSubmitting(true);
        console.log("hello onsubmit ");
        // Here you can perform actions like submitting the form data to an API
        try {
            // const data = await axios.post(`${PORT}/api/admin/addstudent`, { username, password, email })
            // navigate('/admin-dashboard')

            const res = await axios.post(`${PORT}/api/user/validUser`, {username})
            console.log("User validated")
            const user= {username: username, message: message, userType:"student"};
            
             dispatch({type:"LOGIN", payload:user});
            
        } catch (error) {
            console.log("Not a valid username: ", error.message);
        }
        finally {
            setSubmitting(false);
        }
    };
  
    return (
        <>
        
        {!user && <div className="flex justify-center items-center h-screen">
            <div
                className="w-full max-w-md p-4 bg-gray-100 shadow-md rounded-lg"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    //   placeholder="Registration Number"
                    />
                    {errors && errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[100px]"
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here"
                    />
                    {errors && errors.message && (
                        <p className="text-red-500 text-xs italic">{errors.message.message}</p>
                    )}
                </div>


                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={onSubmit}
                        disabled={submitting}
                    >
                        Submit
                    </button>
                </div>
            </div>

        </div>}
        {user && <UseSocketSetup />}
        
        </>
    )
}
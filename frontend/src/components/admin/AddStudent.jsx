import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PORT = import.meta.env.VITE_DOMAIN;

const schema = yup.object().shape({
    username: yup.string().required('Username is required').max(50, 'Username must be at most 50 characters'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(255, 'Password must be at most 255 characters'),
    email: yup.string().email('Invalid email').required('Email is required').max(50, 'Email must be at most 50 characters')
});
export default function AddStudent() {
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)

    });

    const onSubmit = async () => {
        setSubmitting(true);
        console.log("hello onsubmit ");
        // Here you can perform actions like submitting the form data to an API
        try {
            const data = await axios.post(`${PORT}/api/admin/addstudent`, { username, password, email })
            navigate('/admin-dashboard')
            console.log(data);
        } catch (error) {
            console.log("error in adding student: ", error.message);
        }
        finally {
            setSubmitting(false);
        }
    };
    return (
        <div className="flex justify-center items-center h-screen">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors && errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Test123@gmail.com"
                    />
                    {errors && errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
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

        </div>
    )
}
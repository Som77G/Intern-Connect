import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PORT = import.meta.env.VITE_DOMAIN;

export default function StudentDashboard() {
    const [user, setUser] = useState({
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
    useEffect(() => {
        getStudentProfile();
    }, [])

    const onLogout = async () => {
        try {
            const res = await axios.get(`${PORT}/api/user/logout`)
            navigate('/login')
            console.log(res.data)

        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <button
                onClick={onLogout}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Log out</button>

            <h1>{user.username ? user.username : ''}</h1>
            <h1>{user.email ? user.email : ''}</h1>
        </>
    )
}
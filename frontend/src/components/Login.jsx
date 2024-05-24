import { useState, useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../hooks/useAdminContext";
import UseSocketSetup from "../hooks/UseSocketSetup";
import StudentDashboard from "./student/StudentDashboard";
axios.defaults.withCredentials = true;

const PORT = import.meta.env.VITE_DOMAIN;
export default function Login() {
    const { user: loginUser, dispatch } = useAdminContext();
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        password: "",
        userType: "",
    })

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        try {

            setLoading(true);
            const response = await axios.post(`${PORT}/api/user/login`, user);
            console.log("bit: ", response.data.message.resetpassword);
            const message = response.data.message;
            const type = response.data.userType

            // if (message.resetpassword !== 0) {
            //     if (user.userType == 'student') {
            //         navigate('/student-dashboard')
            //     }
            //     else if (user.userType == 'admin') {
            //         navigate('/admin-dashboard')
            //     }
            // }
            console.log("User of login: ", type);
            const loginUser = { userid: message.userid, username: message.username, userType: type }
            
            if (message.resetpassword != 0) {
                dispatch({ type: "LOGIN", payload: loginUser })
                if (type == 'student') {
                    console.log("Redirecting....")
                    navigate('/student-dashboard')
                }
            }
        } catch (error) {
            console.log("Login failed", error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        if (user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    useEffect(() => {
        console.log("Rerendered login")
    }, [loginUser]);

    return (
        <>
            {!loginUser && <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1>{loading ? "Processing" : "Login"}</h1>
                <hr />
                <label htmlFor="userType">UserType</label>
                <select
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="userType"
                    value={user.userType}
                    onChange={(e) => setUser({ ...user, userType: e.target.value })}
                >
                    <option value="">Select UserType</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
                <label htmlFor="username">username</label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="username"
                />

                <label htmlFor="password">password</label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
                />



                <button
                    onClick={onLogin}
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No Login" : "Login"}</button>
                {/* <Link href="/login">Visit login page</Link> */}
            </div>}
            {loginUser && <UseSocketSetup />}
        </>
    )
}
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
const PORT = import.meta.env.VITE_DOMAIN;

export default function ResetPassword() {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)
    const [userType, setUserType] = useState("")
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);


    const verifyUserEmail = async () => {
        try {
            const response = await axios.post(`${PORT}/api/user/verifyEmail`, { token, userType })
            const data = response.data
            console.log(data);
            setUsername(data.user.username);

            setVerified(true)
        } catch (error) {
            setError(true)
            console.log(error.response.data)
        } finally {
            setLoading(true)
        }
    }

    useEffect(() => {
        const url = window.location.search.split("=");
        const token = url[1].split('&')[0];
        const userType = url[2];
        setToken(token || "");
        setUserType(userType);
    }, [])
    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token])

    const onReset = async () => {
        try {
            const response = await axios.put(`${PORT}/api/user/resetPassword`, { username, password, userType });
            // console.log("updated password", response.data)
            if (userType == 'student') {
                navigate('/student-dashboard')
            }
            else{
                navigate('/admin-dashboard')
            }
        } catch (error) {
            setError(true);
            console.log(error.response)
        } finally {
            setButtonDisabled(false)

        }
    }

    useEffect(() => {
        if (password.length == 0 || password !== confirmPassword) {
            setButtonDisabled(false)
        }
        else {
            setButtonDisabled(true)
        }
    }, [confirmPassword])
    return (
        <>
            {!loading && (
                <h1>processing</h1>
            )}
            {loading && !error && (
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <h1>{loading ? "Processing" : "Reset Password"}</h1>
                    <hr />

                    {/* reset password form */}
                    <label htmlFor="password">Code</label>
                    <input
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />

                    <label htmlFor="confirmPassword">Confirm Code</label>
                    <input
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="confirm password"
                    />

                    <button
                        disabled={!buttonDisabled}
                        onClick={onReset}
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    >
                        Reset
                    </button>
                </div>
            )}

            {loading && error && (
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <h1>Error</h1>
                    {/* You can also display additional error details here if needed */}
                </div>
            )}
        </>
    )
}
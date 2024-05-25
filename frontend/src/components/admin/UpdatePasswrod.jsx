import axios from "axios"
import { useState } from "react"
const PORT = import.meta.env.VITE_DOMAIN;

export default function UpdatePassword() {
    const [username, setUsername] = useState('')
    const [submitting, setSubmitting] = useState(false)
    

    const onSubmit = async() => {
        try {
            setSubmitting(true)
            const res = await axios.put(`${PORT}/api/user/updatePassword`, {username})
            console.log("Now student can reset password")
            
            //here we can write logic to notify student about it by sending him mail or something
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }
    return (
        <>
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
                    {/* {errors && errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>} */}
                </div>

                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={onSubmit}
                        disabled={submitting}
                    >
                        Update
                    </button>
                </div>
            </div>
        </>
    )
}
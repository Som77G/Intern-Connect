import axios from "axios"
import { useState } from "react"
const PORT = import.meta.env.VITE_DOMAIN;
axios.defaults.withCredentials = true
import { toast } from "react-toastify";

export default function StudentProfile({profile}) {
    const [deduct, setDeduct] = useState(false)
    const [newCredits, setNewCredits] = useState('')
    const [message, setMessage] = useState('')

    const onDeduct = async() => {
        try {
            console.log("New credits: ", newCredits)
            console.log("message: ", message)

            const data = {
                first_name : profile.first_name,
                last_name : profile.last_name,
                email : profile.email,
                userid : profile.userid,
                credit : newCredits,
                message : message
            }

            const response = await axios.put(`${PORT}/api/admin/deductcredit`, data)
            console.log("Credits updated successfully:", response.data.message)
            toast.success(response.data.message + ' ' + 'Mail has been sent to student')
        } catch (error) {
            console.log("Error in deducting credits: ", error)
            toast.error(error)
        } finally {
            setDeduct(false)
            setNewCredits('')
            setMessage('')
        }
    }
    return (
        <>
            <div className="mt-5 bg-zinc-900 p-6 rounded">
                <h1>Name: </h1>
                <h3>{profile.first_name + " " + profile.last_name}</h3>
                <h1>Credits: </h1>
                <h3>{profile.credit}</h3>

                <button
                    className="bg-yellow-400 p-2 rounded mt-2"
                    onClick={(e) => setDeduct(true)}
                >Deduct credits</button>

                {deduct && (
                    <div className="flex flex-col">
                        <input
                            type = "number"
                            className="mt-4 pl-2 py-2 rounded text-black"
                            placeholder="New credits"
                            onChange = {(e) => setNewCredits(e.target.value)}
                        />
                        <textarea
                            className="mt-4 pl-2 py-2 rounded text-black"
                            placeholder="Reason To deduct credits (Will be mailed to student)"
                            onChange = {(e) => setMessage(e.target.value)}
                        />
                        <button
                        className="bg-yellow-400 p-2 rounded mt-2"
                        onClick={(e) => onDeduct()}
                        >Update</button>
                    </div>
                )}
            </div>
        </>
    )
}
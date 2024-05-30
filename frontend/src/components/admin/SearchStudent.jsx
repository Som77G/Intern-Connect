import axios from "axios";
import { useState } from "react";
import StudentProfile from './StudentProfile'
const PORT = import.meta.env.VITE_DOMAIN;

export default function SearchStudent() {
    const [result, setResult] = useState('')
    const [input, setInput] = useState('')
    const [fetched, setFetched] = useState('')
    const loadProfile = async (student) => {
        try {
            console.log("Profile loaded")
            setResult('')

            const response = await axios.get(`${PORT}/api/student/dashboard?userid=${encodeURIComponent(student.userid)}`)
            const profile = response.data.message
            console.log("Profile fetched", profile)
            setFetched(profile)

        } catch (error) {
            console.log("Error in fetching profile", error)
        }
    }

    const onSearchApi = async (e) => {
        console.log("Fetching, ..", e)

        try {
            const response = await axios.get(`${PORT}/api/user/searchStudent?username=${encodeURIComponent(e)}`)
            const matchArray = response.data.users;

            setResult(matchArray)
            console.log(matchArray)
        } catch (error) {
            console.log("Error in search bar", error)
        }

    }
    let timer;
    //calling the api when the the gap between tweo key presses is >= delay
    const debouncingFunction = (fn, e, delay) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            onSearchApi(e)
        }, delay)
    }
    const handleChange = (e) => {
        debouncingFunction(onSearchApi, e, 500)
    }
    return (
        <>
            <div className="mx-auto flex flex-col w-2/5 mt-10">
                <input
                    type='text'
                    placeholder='Search Student by username'
                    onKeyUp={(e) => handleChange(e.target.value)}
                    className="px-4 rounded py-2 text-black"
                />

                {result && result.length > 0 && (
                    <div className="bg-white rounded">
                        {result.map((student) => {
                            return (
                                <div>
                                    <button
                                        className='my-2 ml-3 text-black'
                                        key={student.userid}
                                        onClick={(e) => loadProfile(student)}
                                    >{student.username}</button>
                                </div>
                            )
                        })}
                    </div>
                )}

                {fetched && (
                    <StudentProfile profile={fetched}/>
                )}
            </div>




        </>
    )
}
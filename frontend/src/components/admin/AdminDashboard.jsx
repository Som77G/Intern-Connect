import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseSocketSetup from "../../hooks/UseSocketSetup";
import { useMessageContext } from "../../hooks/useMessageContext";

export default function AdminDashboard() {
    const navigate = useNavigate()
    const {messages}= useMessageContext();
    
    // useEffect(() => {
    //     navigate('/admin-dashboard')
    // }, [])

    useEffect(()=>{
         
    },[messages])
    UseSocketSetup()
    // console.log("message aya tha: ", messages);
    console.log("state aya tha: ", messages);
    return (
        <>
            <div className="mt-10">
                <h1 className="text-xl text-center">Admin Home Page</h1>
            </div>
        </>
    )
}
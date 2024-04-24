import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseSocketSetup from "../../hooks/UseSocketSetup";

export default function AdminDashboard() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/admin-dashboard')
    }, [])
    UseSocketSetup()
    return (
        <>
            <div className="mt-10">
                <h1 className="text-xl text-center">Admin Home Page</h1>
            </div>
        </>
    )
}
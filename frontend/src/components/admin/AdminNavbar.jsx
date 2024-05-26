import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Notifications from "./Notifications";
export default function AdminNavbar(){
    return (
        <>
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <Link to="/admin-home-page">
                           Home
                        </Link>
                        <Link to="/admin-home-page/add-student">
                            Add Student
                        </Link>
                        <Link to="/admin-home-page/update-password">
                          Update Credentials
                        </Link>
                        <Link to="/admin-home-page/analysis">
                            Analysis
                        </Link>
                        <Link to="/admin-home-page/notifications">
                            Notifications
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}
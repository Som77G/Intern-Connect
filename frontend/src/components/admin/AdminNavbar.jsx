import { Link } from "react-router-dom";
export default function AdminNavbar(){
    return (
        <>
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <Link to="admin-dashboard/add-student">
                            Add Student
                        </Link>
                        <Link to="admin-dashboard/update-credentials">
                          Update Credentials
                        </Link>
                        <Link href="admin-dashboard/analysis">
                            Analysis
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}
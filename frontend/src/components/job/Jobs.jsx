import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAdminContext } from "../../hooks/useAdminContext";
import axios from "axios";
axios.defaults.withCredentials = true;
const PORT = import.meta.env.VITE_DOMAIN;

export default function Jobs() {
    const { user } = useAdminContext();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getAllJobs = async () => {
            try {
                console.log("Request to fetch jobs");
                const response = await axios
                    .get(`${PORT}/api/job/getAllJobs`, {
                        withCredentials: true,
                    });
                setJobs(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        if (user) {
            getAllJobs();

        }

    }, [user]);
    console.log("Jobs array:", jobs);
    return (
        <>
            {(!user || jobs.length === 0) ?
                (<h3 className="text-center text-3xl font-extrabold text-white">Processing...</h3>)
                : (<section className="py-8">
                    <div className="mx-auto px-4">
                        <h1 className="text-3xl font-bold text-center mb-8">ALL AVAILABLE JOBS</h1>
                        <div className="banner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {jobs.jobs &&
                                jobs.jobs.map((element) => {
                                    return (
                                        <div
                                            className="card p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                                            key={element.id}
                                        >
                                            <p className="text-xl font-semibold mb-2">{element.title}</p>
                                            <p className="text-gray-600 mb-2">{element.category}</p>
                                            <p className="text-gray-600 mb-4">{element.country}</p>
                                            <NavLink
                                                to={`/user/job/${element.id}`}
                                                className="text-blue-500 hover:text-blue-700 font-medium"
                                            >
                                                Job Details
                                            </NavLink>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </section>)
            }

        </>
    )
}
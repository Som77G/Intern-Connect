import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAdminContext } from "../../hooks/useAdminContext";
import { useNavigate } from "react-router-dom";
import { FaCheck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

axios.defaults.withCredentials = true;
const PORT = import.meta.env.VITE_DOMAIN;

export default function MyJobs() {
    const [myJobs, setMyJobs] = useState([]);
    const [editingMode, setEditingMode] = useState(null);
    const [tempJobData, setTempJobData] = useState({});
    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const { user } = useAdminContext();
    const navigateTo = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                console.log("Fetching admin jobs");
                const { data } = await axios.get(`${PORT}/api/job/getMyJobs`, {
                    withCredentials: true
                });
                console.log("Received admin jobs");
                console.log("data of jobs", data.myJobs);
                setMyJobs(data.myJobs);
            } catch (error) {
                console.log("Error at fetching my jobs", error);
                toast.error(error.response.data.message);
                setMyJobs([]);
            }
        };
        if (user) {
            fetchJobs();
        }
        if ((user && user.userType !== 'admin')) {
            navigateTo("/");
        }
    }, [user]);

    const handleEnableEdit = (jobId) => {
        const job = myJobs.find((job) => job.id === jobId);
        setTempJobData(job);
        setEditingMode(jobId);
    };

    const handleDisableEdit = () => {
        setEditingMode(null);
        setTempJobData({});
    };

    const handleUpdateJob = async (jobId) => {
        setIsUpdating(true);
        try {
            console.log("updating job");
            const updatedJob = myJobs.find((job) => job.id === jobId);
            const response = await axios.put(`${PORT}/api/job/updateJob/${jobId}`, tempJobData, {
                withCredentials: true
            });
            console.log("Job updated successfully", response);

            setMyJobs((prevJobs) =>
                prevJobs.map((job) =>
                    job.id === jobId ? { ...job, ...tempJobData } : job
                )
            );

            toast.success(response.data.message);
            setEditingMode(null);
            setTempJobData({});
        } catch (error) {
            console.log("error at updating job", error);
            toast.error(error.response.data.message);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDeleteJob = async (jobId) => {
        setIsDeleting(true);
        try {
            console.log("deleting job");
            const response = await axios.delete(`${PORT}/api/job/deleteJob/${jobId}`, {
                withCredentials: true
            });
            console.log("job deleted successfully", response);

            toast.success(response.data.message);
            setMyJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
        } catch (error) {
            console.log("error at deleting job", error.response);
            toast.error(error.response.data.message);
        } finally {
            setIsDeleting(false);
        }
    };

    const handleInputChange = (jobId, field, value) => {
        setTempJobData((prevData) => ({
            ...prevData,
            [field]: field === 'expired' ? (value === 'true' ? true : false) : value
        }));
    };

    return (
        <>
        <h1>My Jobs</h1>
        </>
    )
}
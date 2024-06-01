import React from "react";
import AdminHeader from "../admin/AdminHeader";
import AdminNavbar from "../admin/AdminNavbar";

export default function MyJobs(){
    return(
        <>
        <AdminHeader/>

        <section className="flex flex-col md:flex-row lg:flex-row py-1 bg-blueGray-50">
        <AdminNavbar/>
        <div>
            My Jobs
        </div>
        </section>
        </>
    )
}
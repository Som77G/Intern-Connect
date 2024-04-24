import { useEffect } from "react";
import {Navigate} from 'react-router-dom'
import getSocketInstance from "../socket";
import { useAdminContext } from "./useAdminContext";
import AdminDashboard from "../components/admin/AdminDashboard"
// import { io } from "socket.io-client";
// import { useAuthContext } from "./useAuthContext";
const UseSocketSetup = () => {
   
  const {user}= useAdminContext();
  // const username= "smt96700"
  // const token= "Hello8938";
  // const socket= new io("http://localhost:4000", {
  //     autoConnect: false,
  //     withCredentials: true,
  //     query: {
  //         username,
  //         token,
  //     },
  // });
  const socket= getSocketInstance();
  useEffect(() => {
    // const user= JSON.parse(localStorage.getItem('user'));
    // const userid = user.userid;
    // const socket = new io("http://localhost:4000", {
    //   autoConnect: false,
    //   withCredentials: true,
    //   query: {
    //     userid,
    //   },
    // });
    
    socket.connect();

    socket.on("connected", (status, username)=>{
      console.log("connected to socket")
    });
    socket.on("message",(message)=>{
      console.log("message received from stduent")
    })
    socket.on("dm", message => {
      console.log("dm socket");
    //   setMessages(prevMsgs => {
    //     console.log(message);
    //     return [message, ...prevMsgs];
    //   });
    })
    socket.on("connect_error", () => {
    //   logout();
    });
    return () => {
      socket.off("connect_error");
      socket.off("message");
      socket.off("dm");
      socket.off("connected")
    };
  }, []);
  return(
    <div>
      <AdminDashboard/>
    </div>
  )
};
export default UseSocketSetup;
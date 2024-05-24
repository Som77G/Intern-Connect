import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import getSocketInstance from "../socket";
import { useAdminContext } from "./useAdminContext";
import AdminDashboard from "../components/admin/AdminDashboard"
import RequestToAdmin from "../components/student/RequestToAdmin";
import MessageSent from "../components/MessageSent";
import { useMessageContext } from "./useMessageContext";
// import { io } from "socket.io-client";
// import { useAuthContext } from "./useAuthContext";
const UseSocketSetup = () => {
  const { messages, dispatch } = useMessageContext();
  const { user } = useAdminContext();
  console.log("detials", user, " ", user.userType)
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
  const socket = getSocketInstance();
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

    socket.on("connected", (status, username) => {
      console.log("connected to socket")
    });
    socket.on("message_received", (message) => {
      console.log("message received from stduent", message)
      dispatch({ type: 'ADD_MESSAGE', payload: message })
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
  }, [dispatch]);
  return (
    <>
      {user && (user.userType == 'student') && (
        <MessageSent />
      )}
      {user && (user.userType == 'admin') && (
        <Navigate to = '/admin-dashboard'/>
      )}
    </>
  )
};
export default UseSocketSetup;
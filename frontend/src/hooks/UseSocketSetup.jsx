import { useContext, useEffect } from "react";
import getSocketInstance from "../socket";
import {user} from '../App'
// import { io } from "socket.io-client";
// import { useAuthContext } from "./useAuthContext";
const UseSocketSetup = (setUserId) => {
    const {userId} = useContext(user)
  // const {user}= useAuthContext();
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
  const socket= getSocketInstance(userId);
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
    socket.on("messages", messages=>{
          console.log("messgage")
          //setMessages(messages);
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
      socket.off("messages");
      socket.off("dm");
      socket.off("connected")
    };
  }, [setUserId]);
};
export default UseSocketSetup;
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseSocketSetup from "../../hooks/UseSocketSetup";
import { useMessageContext } from "../../hooks/useMessageContext";
import AdminNavbar from "./AdminNavbar";
import { useNewMessageContext } from "../../hooks/useNewMessageContext";
// export const HasNewMessageContext= createContext();
export default function AdminHomePage(){
    const navigate = useNavigate()
    const {messages}= useMessageContext();
    const {hasNewMessage, dispatch}= useNewMessageContext();
    // const [hasNewMessage, setHasNewMessage]= useState(false);
    // useEffect(() => {
    //     navigate('/admin-dashboard')
    // }, [])
    console.log("first time: ", hasNewMessage);
    useEffect(()=>{
        console.log("hello buddy message");
        console.log("hello buddy message");
        console.log("hello buddy message");
        console.log("hello buddy message");
         if(messages && messages.length > 0 && hasNewMessage=="default"){
           dispatch({type: "GOT_MESSAGE"});
         }
    },[messages])
    useEffect(()=>{
          console.log("admin page render again");
          console.log("hasNewMessage: ", hasNewMessage);
          if(hasNewMessage=="seen_message"){
           dispatch({type: "RESET"});
          }
    }, [hasNewMessage])
    UseSocketSetup()
    // console.log("message aya tha: ", messages);
    console.log("state aya tha: ", messages);
    return(
        <>
           {/* <HasNewMessageContext.Provider value= {{hasNewMessage, setHasNewMessage}}> */}
            <div className="mt-10">
                <h1 className="text-xl text-center">Admin Home Page</h1>
            </div>
            <AdminNavbar />
            {hasNewMessage=="new_message" && (
                <div className="fixed top-0 right-0 m-4 bg-yellow-500 text-white px-4 py-2 rounded">
                    New Message!
                </div>
            )}
        {/* </HasNewMessageContext.Provider> */}
        </>
    )
}
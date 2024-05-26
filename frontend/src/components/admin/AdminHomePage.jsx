import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseSocketSetup from "../../hooks/UseSocketSetup";
import { useMessageContext } from "../../hooks/useMessageContext";
import AdminNavbar from "./AdminNavbar";
import { useNewMessageContext } from "../../hooks/useNewMessageContext";
import { useAdminContext } from "../../hooks/useAdminContext";
// export const HasNewMessageContext= createContext();
export default function AdminHomePage(){
    const navigate = useNavigate()
    const {messages}= useMessageContext();
    const {hasNewMessage, dispatch}= useNewMessageContext();
    const {user}= useAdminContext();
    const [last, setLast]=  useState(false);
    // const [hasNewMessage, setHasNewMessage]= useState(false);
    // useEffect(() => {
    //     navigate('/admin-dashboard')
    // }, [])
    console.log("first time: ", hasNewMessage);
    useEffect(()=>{
        console.log("hello buddy message");
         if(messages && messages.length > 0 && hasNewMessage=="default"){
            console.log("Hello inside messages default")
            dispatch({type: "GOT_MESSAGE"});
         }
         
        
        console.log("inside the main context");
        //  if(messages && messages.length > 0 && hasNewMessage=='none'){
        //     console.log("hello messages inside last useEffect");
        //     dispatch({type: 'RESET'});
           
        // }
         console.log("hasNewMessages", hasNewMessage);
    },[messages])
   
    useEffect(()=>{
          console.log("admin page render again");
          console.log("hasNewMessage: ", hasNewMessage);
          if((hasNewMessage=="seen_message")){
           dispatch({type: "NONE"});
          }
    }, [hasNewMessage])

    UseSocketSetup()
    // console.log("message aya tha: ", messages);
    console.log("state aya tha: ", messages);
    console.log("hasNewMessage: ", hasNewMessage);
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
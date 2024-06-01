import React, { useContext, useEffect } from 'react';
import { useMessageContext } from '../../hooks/useMessageContext';
import UseSocketSetup from '../../hooks/UseSocketSetup';
import AdminNavbar from './AdminNavbar';
import { useNewMessageContext } from '../../hooks/useNewMessageContext';
export default function Notifications() {
    const { messages } = useMessageContext();
    const {hasNewMessage, dispatch}= useNewMessageContext();
    useEffect(() => {
        // Perform any side effects here if needed when messages change
        if(hasNewMessage=="new_message" || hasNewMessage=="default"){
         dispatch({type: "SEEN_MESSAGE"});
         
        }
       
        console.log("inside notifications", hasNewMessage)
    }, [hasNewMessage]);
    UseSocketSetup()
    return (
        <>
           <AdminNavbar />
            {messages && messages.length > 0 ? (
                <div className="mt-10">
                    <h1 className="text-xl text-center">Notifications</h1>
                    <ul className="mt-5 space-y-4">
                        {messages.map((message, index) => (
                            <li key={index} className="p-4 border rounded shadow">
                                <div className="font-bold">{message.from_username}</div>
                                <div>{message.message}</div>
                                <div className="text-sm text-gray-500">To: {message.to_username}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h1 className="mt-10 text-center">No messages</h1>
            )}
        </>
    );
}

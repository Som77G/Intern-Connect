import {createContext, useEffect, useState, useReducer} from "react";
import axios from "axios";

const PORT = import.meta.env.VITE_DOMAIN;
axios.defaults.withCredentials = true;
export const MessageContext= createContext();
export const MessageReducer= (state, action)=>{
    switch(action.type){
        case 'SET_MESSAGE':
            console.log("sign up admin context")
            return{
                messages: action.payload
            }
        case 'ADD_MESSAGE':
            console.log("this is in add_message:",state);
            let newMessages=[];
            if(state && state.message){
                newMessages= [action.payload, ...state.messages]
            }else{
                newMessages= [action.payload];
            }
            return {
                messages:newMessages
            }
        default:
            return state;
    }
}



export const MessageContextProvider=  ({children})=>{
     const [state, dispatch]= useReducer(MessageReducer, {messages:null})
    //  dispatch({type: 'ADD_MESSAGE', })
     return (
        <MessageContext.Provider value= {{...state, dispatch}}>
         {children}
        </MessageContext.Provider>
     )
}
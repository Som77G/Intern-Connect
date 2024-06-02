import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AdminContextProvider } from './context/AdminContext.jsx'
import { MessageContextProvider } from './context/MessageContext.jsx'
import { NewMessageContextProvider } from './context/NewMessageContext.jsx'
import { ProfileContextProvider } from './context/ProfileContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminContextProvider>
      <ProfileContextProvider>
        <MessageContextProvider>
          <NewMessageContextProvider>
            <App />
          </NewMessageContextProvider>
        </MessageContextProvider>
      </ProfileContextProvider>
    </AdminContextProvider>
  </React.StrictMode>,
)

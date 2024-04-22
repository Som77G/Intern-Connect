import { useState, createContext } from 'react'
import UseSocketSetup from '../hooks/UseSocketSetup'
export const user = createContext();

function App() {
  const [userId, setUserId] = useState('')
  UseSocketSetup(setUserId);
  return (
    <>
      <user.Provider value= {{userId, setUserId}}>
      <input
        type = "text"
        value = {userId}
        onChange={setUserId(e.target.value)}
      />
      </user.Provider>
    </>
  )
}

export default App

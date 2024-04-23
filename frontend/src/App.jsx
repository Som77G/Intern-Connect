import React, { useState, createContext } from 'react';
import UseSocketSetup from './hooks/UseSocketSetup';

export const UserContext = createContext();

function InputComponent() {
  const [userId, setUserId] = useState('');
  // UseSocketSetup(setUserId);

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <input
        type="text"
        value={userId}
        onChange={handleChange}
      />
      <h1>Hello Buddy</h1>
    </UserContext.Provider>
  );
}

export default InputComponent;

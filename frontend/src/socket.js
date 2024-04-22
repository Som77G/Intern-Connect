import { io } from "socket.io-client";
let socket; // Declare a variable to store the socket instance

const createSocketInstance = () => {
  return io("http://localhost:3000", {
    autoConnect: false,
    withCredentials: true,
    query: {
      
    },
  });
};

const getSocketInstance = (userId) => {
  if (!socket) {
    // If the socket instance doesn't exist, create it
    socket = createSocketInstance();
  }

  return socket;
};

export default getSocketInstance;

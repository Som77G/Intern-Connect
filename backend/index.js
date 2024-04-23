require('dotenv').config();
const express = require('express');
const adminRouter= require("./routes/admin")
const app = express();
const PORT = 3000;
const userRouter= require("./routes/user");
const cors = require("cors");
const studentRouter= require("./routes/student")
const cookieParser = require('cookie-parser');
//socket
const { Server } = require("socket.io");

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser());
const {query}  = require('./dbconfig/dbconfig');

//cors policy
app.use(cors(
    {
        origin : "http://localhost:5173",
        methods: "GET, POST, OPTIONS, PUT, DELETE",
        credentials: true,
      }
));

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/student", studentRouter);
app.get('/', async(req, res) => {
    // res.send('Hello, World!');

    try {
        const queryi= `
        SELECT * FROM users_student
        `
        
        const users = await query({
            query: queryi,
            values:[]
        });
        
        res.json(users);
    } catch (error) {
        console.log("helllo error")
        res.status(500).json({ message: error.message });
    }
});

const server = app.listen(process.env.PORT, () => {
    console.log("connected to db & listening on port", process.env.PORT);
});
//create socket instance
const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT"],
      credentials: true,
    },
});

// handle WebSocket connections
io.on("connection", (socket) => {
    //const { userid, username } = socket.handshake.query;
    console.log("Hello Socket");
    // console.log(`user connected: ${socket.id}`)
    //console.log(userid);
    // Attach userid and username to the socket object
    // socket.userid = userid;
    // socket.username = username;

    //initialise user
    //initializeUser(userSocketMap,socket);
     // Add the user ID and socket ID to the mapping
    //   userSocketMap.set(userid, socket.id);
    socket.on("add_friend", (friendName, cb)=>{
         addFriend(socket, friendName, cb);
    });
    socket.on("disconnecting", ()=> onDisconnect(userSocketMap, socket))
    socket.on("dm", (message)=> dm(io, userSocketMap, socket, message))
    socket.on('disconnect', () => {
      // Remove the user ID and socket ID from the mapping when a socket disconnects
      userSocketMap.delete(userid);
    });
  });


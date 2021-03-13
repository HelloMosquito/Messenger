import { io } from "socket.io-client";

export const socketInit = () => {
  const socket = io("http://127.0.0.1:3001");
  socket.on("messaging", (msg) => {
    console.log("From server: ", msg);
  });
  socket.on("welcome", (msg) => {
    console.log(msg);
  });
};

socketConnection = (io) => {
  io.on("connection", (socket) => {
    console.log("Server: new connection on socket id: ", socket.id);
    io.emit("welcome", "An user joins the Messenger. Welcome!");

    socket.on("messaging", (data) => {
      console.log("From client: ", data);
      io.emit(
        "broadcasting",
        "I have reveived your message and will send it later."
      );
    });

    socket.on("disconnect", () => {
      console.log("Server: user disconnected");
    });
  });
};

module.exports = { socketConnection };

socketConnection = (io) => {
  io.on("connection", (socket) => {
    console.log("Server: new connection on socket");
    console.log(socket.id);
    socket.on("messaging", (data) => {
      console.log("From client: ", data);
      io.emit("broadcasting", "hahahahaha");
    });

    socket.on("disconnect", () => {
      console.log("Server: user disconnected");
    });
  });
};

module.exports = { socketConnection };

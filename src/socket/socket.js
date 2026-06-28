function initializeSocket(io) {
  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("join-room", ({ username, room }) => {
      // Leave previous rooms
      socket.rooms.forEach((joinedRoom) => {
        if (joinedRoom !== socket.id) {
          socket.leave(joinedRoom);

          socket.to(joinedRoom).emit("system-message", {
            text: `${username} left ${joinedRoom}`,
            type: "leave",
          });
        }
      });

      socket.data.username = username;
      socket.data.room = room;

      socket.join(room);

      socket.to(room).emit("system-message", {
        text: `${username} joined ${room}`,
        type: "join",
      });

      console.log(`${username} joined ${room}`);
    });

    socket.on("send-message", (data) => {
      io.to(data.room).emit("receive-message", data);
    });

    socket.on("typing", (data) => {
      socket.to(data.room).emit("user-typing", data.username);
    });

    socket.on("stop-typing", (room) => {
      socket.to(room).emit("user-stop-typing");
    });

    socket.on("disconnect", () => {
      const username = socket.data.username;
      const room = socket.data.room;

      if (username && room) {
        socket.to(room).emit("system-message", {
          text: `${username} left the chat`,
          type: "leave",
        });
      }

      console.log("Client disconnected:", socket.id);
    });
  });
}

module.exports = initializeSocket;
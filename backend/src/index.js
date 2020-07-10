const express = require("express");
const server = express();

server.use(express.json());

const TaskRoutes = require("./routes/TaskRoutes");
server.use("/task", TaskRoutes);

server.listen(3022, () => {
  console.log("Ouvindo na porta 3022");
});

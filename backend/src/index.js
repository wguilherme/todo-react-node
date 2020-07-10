const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
server.use(express.json());


const TaskRoutes = require("./routes/TaskRoutes");
server.use("/task", TaskRoutes);

server.listen(3000, () => {
  console.log("Ouvindo na porta 3000");
});

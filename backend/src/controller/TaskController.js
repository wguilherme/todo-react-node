const TaskModel = require("../model/TaskModel");

class TaskController {
  async create(req, res) {
    const task = new TaskModel(req.body);

    await task
      .save()
      .then((response) => {
        console.log("entrou");
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500, json(error));
      });
  }

  async update(req, res) {
    console.log("entrou");
    await TaskModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
}

module.exports = new TaskController();

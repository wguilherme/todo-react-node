const TaskModel = require("../model/TaskModel");
const { findByIdAndDelete } = require("../model/TaskModel");
const {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} = require("date-fns");

const current = new Date();

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

  async all(req, res) {
    console.log("list");
    await TaskModel.find({ macaddress: { $in: req.params.macaddress } })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.send(500).json(error);
      });
  }

  async show(req, res) {
    await TaskModel.findById(req.params.id)
      .then((response) => {
        if (response) return res.status(200).json(response);
        else if (!response)
          return res.status(404).json({ error: "Tarefa não encontrada" });
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async delete(req, res) {
    await TaskModel.deleteOne({ _id: req.params.id })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async done(req, res) {
    await TaskModel.findByIdAndUpdate(
      { _id: req.params.id },
      { done: req.params.done },
      { new: true }
    )
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async late(req, res) {
    await TaskModel.find({
      when: { $lt: current },
      macaddress: { $in: req.params.macaddress },
    })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async today(req, res){
    await TaskModel
          .find({ 
            'macaddress': {'$in': req.params.macaddress},
            //maior que o começo do dia de hoje
            //menor que o fim do dia de hoje
            'when': {'$gte': startOfDay(current), '$lt': endOfDay(current)}

          })
          .sort('when')
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error)
          })
  }

  async week(req, res){
    await TaskModel
          .find({ 
            'macaddress': {'$in': req.params.macaddress},
            //maior que o começo do dia de hoje
            //menor que o fim do dia de hoje
            'when': {'$gte': startOfWeek(current), '$lt': endOfWeek(current)}

          })
          .sort('when')
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error)
          })
  }
  async month(req, res){
    await TaskModel
          .find({ 
            'macaddress': {'$in': req.params.macaddress},
            //maior que o começo do dia de hoje
            //menor que o fim do dia de hoje
            'when': {'$gte': startOfMonth(current), '$lt': endOfMonth(current)}

          })
          .sort('when')
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error)
          })
  }
  async year(req, res){
    await TaskModel
          .find({ 
            'macaddress': {'$in': req.params.macaddress},
            //maior que o começo do dia de hoje
            //menor que o fim do dia de hoje
            'when': {'$gte': startOfYear(current), '$lt': endOfYear(current)}

          })
          .sort('when')
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error)
          })
  }
}

module.exports = new TaskController();

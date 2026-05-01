const Task = require("../models/Task");


// CREATE TASK
const createTask = async (req, res) => {

  try {

    const task = await Task.create(req.body);

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET TASKS
const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find()
      .populate("assignedTo", "name email")
      .populate("project", "title");

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// UPDATE TASK STATUS
const updateTask = async (req, res) => {

  try {

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    res.json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask
};
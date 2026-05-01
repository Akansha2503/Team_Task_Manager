const Project = require("../models/Project");


// CREATE PROJECT
const createProject = async (req, res) => {

  try {

    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.user.id
    });

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET ALL PROJECTS
const getProjects = async (req, res) => {

  try {

    const projects = await Project.find()
      .populate("createdBy", "name email");

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createProject,
  getProjects
};
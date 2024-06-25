const express = require("express")
const projectController = require("../controllers/projectController.js")
const router = express.Router()

router.post("/add",projectController.addProject)

router.post("/get", projectController.getProjects)

router.post("/getbyId", projectController.getByIdProject)

router.delete("/delete",projectController.deleteProject)

module.exports = router
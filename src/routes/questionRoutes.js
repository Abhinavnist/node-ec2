// routes/questionRoutes.js
const express = require("express")
const questionController = require("../controllers/questioncontroller")

const router = express.Router()

// Retrieve a list of all questions
router.get("/api/questions", questionController.getAllQuestions)

// Retrieve details of a specific question
router.get("/api/questions/:questionId", questionController.getQuestionById)

// Create a new question
router.post("/api/questions", questionController.createQuestion)

// Update a question
router.put("/api/questions/:questionId", questionController.updateQuestion)

module.exports = router

// controllers/questionController.js
const Question = require("../models/community")

// Retrieve a list of all questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Retrieve details of a specific question
exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId)
    if (!question) {
      return res.status(404).json({ message: "Question not found" })
    }
    res.json(question)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new question
exports.createQuestion = async (req, res) => {
  const question = new Question({
    title: req.body.title,
    body: req.body.body,
    user: req.body.user, // Assuming user ID is provided in the request body
  })

  try {
    const newQuestion = await question.save()
    res.status(201).json(newQuestion)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a question
exports.updateQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId)
    if (!question) {
      return res.status(404).json({ message: "Question not found" })
    }

    if (req.body.title) {
      question.title = req.body.title
    }

    if (req.body.body) {
      question.body = req.body.body
    }

    const updatedQuestion = await question.save()
    res.json(updatedQuestion)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

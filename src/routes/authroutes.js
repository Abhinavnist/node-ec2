const router = require("express").Router()

const {
  loginController,
  signupController,
  generateOTP,
  verifyOTP,
  resetPassword,
} = require("../controllers/index")
const forgotPasswordController = require("../controllers/authController/forgotPassword")
router.post("/signup", signupController)
router.post("/login", loginController)
router.get("/generateOTP", generateOTP)
router.put("/resetPassword", resetPassword)
router.post("/forgetPassword", forgotPasswordController)
router.post("/verifyOTP", verifyOTP)

module.exports = router

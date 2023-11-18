const router = require("express").Router()

const {
  loginController,
  signupController,
  generateOTP,
  verifyOTP,
  resetPassword,
  forgotPassword,
} = require("../controllers/index")

router.post("/signup", signupController)
router.post("/login", loginController)
router.get("/generateOTP", generateOTP)
router.put("/resetPassword", resetPassword)
router.post("/forgetPassword", forgotPassword)
router.post("/verifyOTP", verifyOTP)

module.exports = router

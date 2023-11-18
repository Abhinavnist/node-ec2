module.exports = {
  loginController: require("./authController/loginController"),
  signupController: require("./authController/signupController"),
  generateOTP: require("./authController/generateOTP"),
  verifyOTP: require("./authController/verifyOTP"),
  resetPassword: require("./authController/resetPassword"),
  UserController: require("./user-controller"),
  PlanController: require("./plan-controller"),
}

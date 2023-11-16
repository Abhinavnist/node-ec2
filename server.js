const express = require("express")
const { ServerConfig } = require("./src/config/index")
const { ConnectDB } = require("./src/config")
const apiRoutes = require("./src/routes")
const AuthRoutes = require("./src/routes/Auth.routes")
const connectDB = require("./src/config/db-config")
const childRoutes = require("./src/routes/childRoutes")
const productRoutes = require("./src/routes/product")
const emailRoutes = require("./src/routes/emailRoutes")
const cartRoutes = require("./src/routes/cartRoutes")
const reviewRoutes = require("./src/routes/reviews")
const profileRoute = require("./src/routes/profileRoute")

const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  return res.json({ success: "Server is live" })
})

app.use("/api", apiRoutes)
app.use("/api", childRoutes)
app.use("/api/auth", AuthRoutes)
// app.use("/api", subscriptionRoutes)
app.use("/api", emailRoutes)
app.use("/api", productRoutes)
app.use("/api", cartRoutes)
app.use("/api", reviewRoutes)
app.use("/api", profileRoute)

app.listen(ServerConfig.PORT, (error) => {
  if (error) {
    console.log(error)
  } else {
    connectDB()
    console.log(`Successfully listening to Port ${ServerConfig.PORT}`)
  }
})

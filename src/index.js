const express = require("express")
const { ServerConfig } = require("./config/index")
const { ConnectDB } = require("./config")
const connectDB = require("./config/db-config")
const authRoutes = require("../src/routes/authroutes")
const childRoutes = require("./routes/childRoutes")
const productRoutes = require("./routes/product")
const emailRoutes = require("./routes/emailRoutes")
const cartRoutes = require("./routes/cartRoutes")
const reviewRoutes = require("./routes/reviews")
const profileRoute = require("./routes/profileRoute")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  return res.json({ success: "Server is live" })
})

app.use("/api", childRoutes)
app.use("/api/auth", authRoutes)
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

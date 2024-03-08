import express from "express"
import cors from "cors"
import morgan from "morgan"
import Routes from "./routes/index.js"

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json()) // si recibe un body => JSON
app.use("/", routes) // => lo va a recibir como JSON
import express from "express";
import morgan from "morgan";
import cors from 'cors'
import { raceRouter } from './routes/race.route.js'
import { refugeRouter } from './routes/refuge.route.js'
import { adopterRouter } from './routes/adopter.route.js'
import { rootRouter } from "./routes/welcome.route.js"
import { registerRouter } from "./routes/register_adoption.route.js";

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(rootRouter)
app.use(raceRouter)
app.use(refugeRouter)
app.use(adopterRouter)
app.use(registerRouter)

export default app;
import express from "express";
import morgan from "morgan";
import cors from 'cors'
import { raceRouter } from './routes/race.route.js'
import { refugeRouter } from './routes/refuge.route.js'
import { adoptingRouter } from './routes/adopting.route.js'
import { speciesRouter } from './routes/species.route.js'
import { petsRouter } from './routes/pets.route.js'
import { rootRouter } from "./routes/welcome.route.js"


const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(rootRouter)
app.use(raceRouter)
app.use(refugeRouter)
app.use(adoptingRouter)
app.use(speciesRouter)
app.use(petsRouter)

export default app;
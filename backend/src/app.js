import express from "express";
import morgan from "morgan";
import cors from 'cors'
import { raceRouter } from './routes/race.route.js'

import { speciesRouter } from './routes/species.route.js'




const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(raceRouter)
app.use(speciesRouter)


export default app;
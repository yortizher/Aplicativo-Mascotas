import express from "express";
import morgan from "morgan";
import cors from 'cors'
import { rootRouter } from "./routes/welcome.route.js"
import { personRefugeRouter } from './routes/person_to_refuge.route.js'
import { refugePersonRouter } from './routes/refuge_to_person.route.js'

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(rootRouter)
app.use(personRefugeRouter)
app.use(refugePersonRouter)

export default app;
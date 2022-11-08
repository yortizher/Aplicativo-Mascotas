import express from "express"
import morgan from "morgan"
import cors from 'cors'
import { raceRouter } from './routes/race.route.js'
import { speciesRouter } from './routes/species.route.js'
import { personRefugeRouter } from './routes/person_to_refuge.route.js'
import { refugePersonRouter } from './routes/refuge_to_person.route.js'
import { imageRouter } from "./routes/image.route.js"
import { uploadRouter } from "./routes/upload.route.js"
import { editStateRouter } from './routes/edit_state.route.js'
import fileupload from 'express-fileupload'
 
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(fileupload({useTempFiles: true}))
app.use(raceRouter)
app.use(speciesRouter)
app.use(personRefugeRouter)
app.use(refugePersonRouter)
app.use(imageRouter)
app.use(uploadRouter)
app.use('/api/v1/edit-state', editStateRouter)

export default app
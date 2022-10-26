import { Router } from 'express'
import { 
    raceById,
    races,
    createRaces,
    editRaces,
    deleteRaces
 } from '../controllers/race.controller.js'

export const raceRouter = Router()


raceRouter.get('/api/v1/race', races)
raceRouter.get('/api/v1/race/:id', raceById)
raceRouter.post('/api/v1/race', createRaces)
raceRouter.put('/api/v1/race/:id', editRaces)
raceRouter.delete('/api/v1/race/:id', deleteRaces)
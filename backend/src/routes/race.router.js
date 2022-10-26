import { Router } from 'express'
import { 
    raceById,
    races,
    createRaces,
    editRace,
    deleteRace
 } from '../controllers/race.controller.js'

export const raceRouter = Router()


raceRouter.get('/api/v1/race', races)
raceRouter.get('/api/v1/race/:id', raceById)
raceRouter.post('/api/v1/race', createRaces)
raceRouter.put('/api/v1/race/:id', editRace)
raceRouter.delete('/api/v1/race/:id', deleteRace)
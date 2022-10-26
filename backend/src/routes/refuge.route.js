import { Router } from 'express'
import { 
    raceById,
    races,
    createRaces,
    editRace,
    deleteRace
 } from '../controllers/race.controller.js'

export const raceRouter = Router()


raceRouter.get('/api/v1/refuge', races)
raceRouter.get('/api/v1/refuge/:id', raceById)
raceRouter.post('/api/v1/refuge', createRaces)
raceRouter.put('/api/v1/refuge/:id', editRace)
raceRouter.delete('/api/v1/refuge/:id', deleteRace)
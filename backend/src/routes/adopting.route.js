import { Router } from 'express'
import { 
    raceById,
    races,
    createRaces,
    editRace,
    deleteRace
 } from '../controllers/race.controller.js'

export const raceRouter = Router()


raceRouter.get('/api/v1/adopting', races)
raceRouter.get('/api/v1/adopting/:id', raceById)
raceRouter.post('/api/v1/adopting', createRaces)
raceRouter.put('/api/v1/adopting/:id', editRace)
raceRouter.delete('/api/v1/adopting/:id', deleteRace)
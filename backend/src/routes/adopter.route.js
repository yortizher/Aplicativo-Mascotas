import { Router } from 'express'
import { 
    adoptingById,
    adopting,
    createAdoptions,
    editAdoptions,
    deleteAdoptions
 } from '../controllers/adopter.controller.js'

export const adopterRouter = Router()


adopterRouter.get('/api/v1/adopting', adopting)
adopterRouter.get('/api/v1/adopting/:id', adoptingById)
adopterRouter.post('/api/v1/adopting', createAdoptions)
adopterRouter.put('/api/v1/adopting/:id', editAdoptions)
adopterRouter.delete('/api/v1/adopting/:id', deleteAdoptions)
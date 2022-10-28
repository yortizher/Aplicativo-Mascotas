import { Router } from 'express'
import { 
    adoptingById,
    adopting,
    createAdoptions,
    editAdoptions,
    deleteAdoptions
 } from '../controllers/refuge_to_person.controller.js'

export const refugePersonRouter = Router()


refugePersonRouter.get('/api/v1/toperson', adopting)
refugePersonRouter.get('/api/v1/toperson/:id', adoptingById)
refugePersonRouter.post('/api/v1/toperson', createAdoptions)
refugePersonRouter.put('/api/v1/toperson/:id', editAdoptions)
refugePersonRouter.delete('/api/v1/toperson/:id', deleteAdoptions)
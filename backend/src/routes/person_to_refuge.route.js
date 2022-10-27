import { Router } from 'express'
import { 
    adoptingById,
    adopting,
    createAdoptions,
    editAdoptions,
    deleteAdoptions
 } from '../controllers/person_to_refuge.controller.js'

export const personRefugeRouter = Router()


personRefugeRouter.get('/api/v1/torefuge', adopting)
personRefugeRouter.get('/api/v1/torefuge/:id', adoptingById)
personRefugeRouter.post('/api/v1/torefuge', createAdoptions)
personRefugeRouter.put('/api/v1/torefuge/:id', editAdoptions)
personRefugeRouter.delete('/api/v1/torefuge/:id', deleteAdoptions)
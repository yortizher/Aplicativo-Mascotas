import { Router } from 'express'
import { 
    adoptingById,
    adopting,
    createAdoptions,
    editAdoptions,
    deleteAdoptions
 } from '../controllers/adopter.controller.js'

export const registerRouter = Router()


registerRouter.get('/api/v1/adopting', adopting)
registerRouter.get('/api/v1/adopting/:id', adoptingById)
registerRouter.post('/api/v1/adopting', createAdoptions)
registerRouter.put('/api/v1/adopting/:id', editAdoptions)
registerRouter.delete('/api/v1/adopting/:id', deleteAdoptions)
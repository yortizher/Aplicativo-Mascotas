import { Router } from 'express'
import { 
    adoptingById,
    adopting,
    createAdoptions,
    editAdoptions,
    deleteAdoptions
 } from '../controllers/adopting.controller.js'

export const adoptingRouter = Router()


adoptingRouter.get('/api/v1/adopting', adopting)
adoptingRouter.get('/api/v1/adopting/:id', adoptingById)
adoptingRouter.post('/api/v1/adopting', createAdoptions)
adoptingRouter.put('/api/v1/adopting/:id', editAdoptions)
adoptingRouter.delete('/api/v1/adopting/:id', deleteAdoptions)
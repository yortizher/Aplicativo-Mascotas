import { Router } from 'express'
import { 
    adoptingById,
    adopting,
    createAdoptions,
    editAdoptions,
    deleteAdoptions
 } from '../controllers/adopter.controller.js'

export const registerRouter = Router()


registerRouter.get('/api/v1/register', adopting)
registerRouter.get('/api/v1/register/:id', adoptingById)
registerRouter.post('/api/v1/register', createAdoptions)
registerRouter.put('/api/v1/register/:id', editAdoptions)
registerRouter.delete('/api/v1/register/:id', deleteAdoptions)
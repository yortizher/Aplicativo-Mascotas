import { Router } from 'express'
import { 
    refugesById,
    refuges,
    createRefuges,
    editRefuges,
    deleteRefuges
 } from '../controllers/refuge.controller.js'

export const refugeRouter = Router()

refugeRouter.get('/api/v1/refuge', refuges)
refugeRouter.get('/api/v1/refuge/:id', refugesById)
refugeRouter.post('/api/v1/refuge', createRefuges)
refugeRouter.put('/api/v1/refuge/:id', editRefuges)
refugeRouter.delete('/api/v1/refuge/:id', deleteRefuges)
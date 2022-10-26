import { Router } from 'express'
import { 
    petsById,
    pets,
    createPets,
    editPets,
    deletePets
 } from '../controllers/pets.controller.js'

export const petsRouter = Router()


petsRouter.get('/api/v1/pets', pets)
petsRouter.get('/api/v1/pets/:id', petsById)
petsRouter.post('/api/v1/pets', createPets)
petsRouter.put('/api/v1/pets/:id', editPets)
petsRouter.delete('/api/v1/pets/:id', deletePets)
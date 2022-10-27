import { Router } from 'express'
import { 
    speciesById,
    species,
    createSpecies,
    editSpecies,
    deleteSpecies
 } from '../controllers/species.controller.js'

export const speciesRouter = Router()


speciesRouter.get('/api/v1/species', species)
speciesRouter.get('/api/v1/species/:id', speciesById)
speciesRouter.post('/api/v1/species', createSpecies)
speciesRouter.put('/api/v1/species/:id', editSpecies)
speciesRouter.delete('/api/v1/species/:id', deleteSpecies)
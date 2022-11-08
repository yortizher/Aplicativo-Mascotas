import { Router } from 'express'
import { editState } from '../controllers/edit_state.controller.js'

export const editStateRouter = Router()

editStateRouter.put('/:id', editState)
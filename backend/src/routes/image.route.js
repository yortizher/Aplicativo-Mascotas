import { Router } from 'express'
import { 
    getImages
 } from '../controllers/image.controller.js'

export const imageRouter = Router()

imageRouter.get('/api/v1/image', getImages)
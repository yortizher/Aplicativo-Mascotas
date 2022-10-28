import { Router } from 'express'
import { 
    uploadImages
 } from '../controllers/upload.controller.js'

export const uploadRouter = Router()

uploadRouter.post('/api/v1/upload', uploadImages)
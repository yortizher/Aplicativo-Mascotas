import { Router } from 'express'
import {rootRoute} from '../controllers/welcome.controller.js'

export const rootRouter = Router()

rootRouter.get('/', rootRoute )

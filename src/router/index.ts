import express, { Request, Response } from 'express'
import userRouter from './user.router'

const router = express.Router()

router.use('/users', userRouter)

router.get('/router', (req: Request, res: Response) => {
  res.send({ name: 'router' })
})

export default router

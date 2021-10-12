import express, { Request, Response } from 'express'

const userRouter = express.Router()

userRouter
  .route('/')
  .get((req: Request, res: Response) => {
    res.send({ name: 'users-get' })
  })
  .post((req: Request, res: Response) => {
    res.send({ name: 'users-post' })
  })

export default userRouter

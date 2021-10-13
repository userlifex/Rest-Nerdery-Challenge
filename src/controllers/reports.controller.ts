import { Request, Response } from 'express'

const commentsCreate = (req: Request, res: Response) => {
  res.send({
    message: 'Comments report create',
  })
}

const postsCreate = (req: Request, res: Response) => {
  res.send({
    message: 'posts report create',
  })
}

export { commentsCreate, postsCreate }

import { Request, Response } from 'express'

const commentsLike = (req: Request, res: Response) => {
  res.send({
    message: 'comments like',
  })
}

const commentsDislike = (req: Request, res: Response) => {
  res.send({
    message: 'comments dislike',
  })
}

const postsLike = (req: Request, res: Response) => {
  res.send({
    message: 'posts like',
  })
}

const postsDislike = (req: Request, res: Response) => {
  res.send({
    message: 'posts dislike',
  })
}

export { commentsLike, commentsDislike, postsDislike, postsLike }

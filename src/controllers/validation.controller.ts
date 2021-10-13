import { Request, Response } from 'express'

const validate = (req: Request, res: Response) => {
  res.send({
    message: 'validate',
  })
}

export default validate

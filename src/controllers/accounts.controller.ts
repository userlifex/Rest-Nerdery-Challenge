import { Request, Response } from 'express'

const find = (req: Request, res: Response) => {
  res.send({
    message: 'find',
  })
}

const findMyAccount = (req: Request, res: Response) => {
  res.send({
    message: 'findMyAccount',
  })
}

const update = (req: Request, res: Response) => {
  res.send({
    message: 'update',
  })
}

const deleteOne = (req: Request, res: Response) => {
  res.send({
    message: 'deleteOne',
  })
}

const findOne = (req: Request, res: Response) => {
  res.send({
    message: 'findOne',
  })
}

export { find, findMyAccount, findOne, update, deleteOne }

import { Request, Response } from 'express'

const create = (req: Request, res: Response) => {
  res.send({
    message: 'create',
  })
}

const find = (req: Request, res: Response) => {
  res.send({
    message: 'find',
  })
}

const edit = (req: Request, res: Response) => {
  res.send({
    message: 'edit',
  })
}

const deleteOne = (req: Request, res: Response) => {
  res.send({
    message: 'delete',
  })
}

export { create, find, edit, deleteOne }

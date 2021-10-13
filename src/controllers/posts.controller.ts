import { Request, Response } from 'express'

const findMyPosts = (req: Request, res: Response) => {
  res.send({
    message: 'Find my posts',
  })
}

const create = (req: Request, res: Response) => {
  res.send({
    message: 'create',
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

const find = (req: Request, res: Response) => {
  res.send({
    message: 'find all posts',
  })
}

const findOne = (req: Request, res: Response) => {
  res.send({
    message: 'find a post',
  })
}

const modDeleteOne = (req: Request, res: Response) => {
  res.send({
    message: 'Mod delete a post',
  })
}

export { find, findMyPosts, findOne, deleteOne, modDeleteOne, create, edit }

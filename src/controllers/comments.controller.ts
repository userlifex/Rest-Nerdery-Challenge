import { Request, Response } from 'express'
import PostsService from '../services/posts.services'

const create = async (req: Request, res: Response) => {
  const { postId } = req.params
  try {
    const post = await PostsService.findOne(postId)
    res.send({
      post,
      message: 'create',
    })
  } catch (error) {
    res.status(400).send({ error })
  }
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

import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import createError from 'http-errors'
import CreatePostDto from '../dtos/posts/req/create-post.dto'
import PostsService from '../services/posts.services'
import AccountsService from '../services/accounts.service'
import PostDto from '../dtos/posts/res/posts.dto'

const findMyPosts = (req: Request, res: Response) => {
  res.send({
    message: 'Find my posts',
  })
}

const create = async (req: Request, res: Response) => {
  const dto = plainToClass(CreatePostDto, req.body)
  try {
    const account = await AccountsService.exists(req.body.accountId)
    if (!account) {
      throw new createError.UnprocessableEntity('Invalid data')
    }
    await dto.isValid()
    const post = await PostsService.create(dto)
    res.status(200).send({
      data: post,
    })
  } catch (error) {
    res.status(400).send({ error })
  }
}

const findByAccountId = async (req: Request, res: Response) => {
  try {
    const account = await AccountsService.exists(req.params.id)
    if (!account) {
      throw new createError.UnprocessableEntity('Invalid data')
    }
    const posts = await PostsService.findByAccountId(req.params.id)
    const dto = plainToClass(PostDto, posts)
    res.status(200).send({
      data: dto,
    })
  } catch (error) {
    res.status(400).send({ error })
  }
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

export {
  findByAccountId,
  find,
  findMyPosts,
  findOne,
  deleteOne,
  modDeleteOne,
  create,
  edit,
}

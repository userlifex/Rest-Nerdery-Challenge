import { plainToClass } from 'class-transformer'
import { Request, Response } from 'express'
import createError from 'http-errors'
import UpdateAccountDto from '../dtos/accounts/req/update-account.dto'
import CreateCommentDto from '../dtos/comments/req/create-comment.dto'
import UpdateCommentDto from '../dtos/comments/req/update-comment.dto'
import CommentsService from '../services/comments.service'
import PostsService from '../services/posts.service'

const create = async (req: Request, res: Response) => {
  const { postId } = req.params
  try {
    await PostsService.exists(postId)
    const createPostDto = plainToClass(CreateCommentDto, {
      postId,
      ...req.body,
    })

    await createPostDto.isValid()
    const comment = await CommentsService.create(createPostDto)
    res.send({
      data: comment,
    })
  } catch (error) {
    res.status(400).send({ title: 'Bad Request', description: error })
  }
}

const find = async (req: Request, res: Response) => {
  const { postId } = req.params
  try {
    await PostsService.exists(postId)
    const comments = await CommentsService.findByPostId(postId)
    res.send({
      data: comments,
    })
  } catch (error) {
    res.status(400).send({ title: 'Bad Request', description: error })
  }
}

const update = async (req: Request, res: Response) => {
  const { commentId, postId } = req.params
  try {
    await CommentsService.existsWithPost(commentId, postId)
    const commentDto = plainToClass(UpdateCommentDto, req.body)
    const comment = await CommentsService.update(commentId, commentDto)
    res.send({
      data: comment,
    })
  } catch (error) {
    res.status(400).send({ title: 'Bad Request', description: error })
  }
}

const deleteOne = async (req: Request, res: Response) => {
  const { commentId, postId } = req.params
  try {
    await CommentsService.existsWithPost(commentId, postId)
    const comment = await CommentsService.delete(commentId)
    res.send({
      data: comment,
    })
  } catch (error) {
    res.status(400).send({ title: 'Bad Request', description: error })
  }
}

export { create, find, update, deleteOne }

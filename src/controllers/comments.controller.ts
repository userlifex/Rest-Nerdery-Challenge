import { plainToClass } from 'class-transformer'
import { Request, Response } from 'express'
import CreateCommentDto from '../dtos/comments/req/create-comment.dto'
import UpdateCommentDto from '../dtos/comments/req/update-comment.dto'
import CommentsService from '../services/comments.service'
import PostsService from '../services/posts.service'

const create = async (req: Request, res: Response) => {
  const { postId } = req.params
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
}

const find = async (req: Request, res: Response) => {
  const { postId } = req.params
  await PostsService.exists(postId)
  const comments = await CommentsService.findByPostId(postId)
  res.send({
    data: comments,
  })
}

const update = async (req: Request, res: Response) => {
  const { commentId, postId } = req.params
  await CommentsService.existsWithPost(commentId, postId)
  const commentDto = plainToClass(UpdateCommentDto, req.body)
  const comment = await CommentsService.update(commentId, commentDto)
  res.send({
    data: comment,
  })
}

const deleteOne = async (req: Request, res: Response) => {
  const { commentId, postId } = req.params
  await CommentsService.existsWithPost(commentId, postId)
  const comment = await CommentsService.delete(commentId)
  res.send({
    data: comment,
  })
}

export { create, find, update, deleteOne }

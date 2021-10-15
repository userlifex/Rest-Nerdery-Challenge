import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import PostLikeDto from '../dtos/likes/req/post-like.dto'
import LikesService from '../services/likes.service'
import CommentLikeDto from '../dtos/likes/req/comment-like.dto'

const commentsLike = async (req: Request, res: Response) => {
  const { accountId } = req.body
  const { commentId } = req.params
  const dto = plainToClass(CommentLikeDto, { accountId, commentId })
  await dto.isValid()
  const like = await LikesService.likeComment(dto)
  res.send({
    data: like,
  })
}

const commentsDislike = async (req: Request, res: Response) => {
  const { accountId } = req.body
  const { commentId } = req.params
  const dto = plainToClass(CommentLikeDto, { accountId, commentId })
  await dto.isValid()
  const like = await LikesService.dislikeComment(dto)
  res.send({
    data: like,
  })
}

const postsLike = async (req: Request, res: Response) => {
  const { accountId } = req.body
  const { postId } = req.params
  const dto = plainToClass(PostLikeDto, { accountId, postId })
  await dto.isValid()
  const like = await LikesService.likePost(dto)
  res.send({
    data: like,
  })
}

const postsDislike = async (req: Request, res: Response) => {
  const { accountId } = req.body
  const { postId } = req.params
  const dto = plainToClass(PostLikeDto, { accountId, postId })
  await dto.isValid()
  const dislike = await LikesService.dislikePost(dto)
  res.send({
    data: dislike,
  })
}

export { commentsLike, commentsDislike, postsDislike, postsLike }

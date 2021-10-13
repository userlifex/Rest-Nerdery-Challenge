import express, { Router } from 'express'
import {
  commentsLike,
  commentsDislike,
  postsDislike,
  postsLike,
} from '../controllers/likes.controller'

const likesRouter = express.Router()

function likesRoutes(): Router {
  likesRouter.route('/comments/:id/like').post(commentsLike)
  likesRouter.route('/comments/:id/dislike').post(commentsDislike)
  likesRouter.route('/posts/:id/like').post(postsLike)
  likesRouter.route('/posts/:id/dislike').post(postsDislike)

  return likesRouter
}

export default likesRoutes

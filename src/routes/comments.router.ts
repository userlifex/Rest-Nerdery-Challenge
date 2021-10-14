import express, { Router } from 'express'
import {
  create,
  find,
  edit,
  deleteOne,
} from '../controllers/comments.controller'

const commentsRouter = express.Router()

function commentsRoutes(): Router {
  commentsRouter.route('/:postId/comments').post(create).get(find)
  commentsRouter
    .route('/:postId/comments/:commentId')
    .put(edit)
    .delete(deleteOne)

  return commentsRouter
}

export default commentsRoutes

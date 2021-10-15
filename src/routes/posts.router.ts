import express, { Router } from 'express'
import {
  findMyPosts,
  findByAccountId,
  findOne,
  deleteOne,
  modDeleteOne,
  create,
  update,
  find,
} from '../controllers/posts.controller'

const postsRouter = express.Router()
const postsRootRouter = express.Router()

function postsRoutes(): Router {
  postsRouter.route('/me/posts').get(findMyPosts).post(create)
  postsRouter.route('/me/posts/:postId').put(update).delete(deleteOne)
  postsRouter.route('/:accountId/posts').get(findByAccountId)
  postsRouter
    .route('/:accountId/posts/:postId')
    .delete(modDeleteOne)
    .get(findOne)

  return postsRouter
}

function postsRootRoutes(): Router {
  postsRootRouter.route('/').get(find)

  return postsRootRouter
}

export { postsRoutes, postsRootRoutes }

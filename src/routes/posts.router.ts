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
  postsRouter.route('/me/posts/:id').put(update).delete(deleteOne)
  postsRouter.route('/:id/posts').get(findByAccountId)
  postsRouter.route('/:id/posts/:id').delete(modDeleteOne).get(findOne)

  return postsRouter
}

function postsRootRoutes(): Router {
  postsRootRouter.route('/').get(find)

  return postsRootRouter
}

export { postsRoutes, postsRootRoutes }

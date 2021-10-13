import express, { Router } from 'express'
import {
  findMyPosts,
  findOne,
  deleteOne,
  modDeleteOne,
  create,
  edit,
  find,
} from '../controllers/posts.controller'

const postsRouter = express.Router()
const postsRootRouter = express.Router()

function postsRoutes(): Router {
  postsRouter.route('/me/posts').get(findMyPosts).post(create)
  postsRouter.route('/me/posts/:id').put(edit).delete(deleteOne)
  postsRouter.route('/:id/posts').get(findOne)
  postsRouter.route('/:id/posts/:id').delete(modDeleteOne)

  return postsRouter
}

function postsRootRoutes(): Router {
  postsRootRouter.route('/').get(find)

  return postsRootRouter
}

export { postsRoutes, postsRootRoutes }

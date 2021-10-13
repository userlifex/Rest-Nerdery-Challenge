import express, { Router } from 'express'
import { commentsCreate, postsCreate } from '../controllers/reports.controller'

const reportsRouter = express.Router()

function reportsRoutes(): Router {
  reportsRouter.route('/comments/:id/report').post(commentsCreate)
  reportsRouter.route('/posts/:id/report').post(postsCreate)

  return reportsRouter
}

export default reportsRoutes

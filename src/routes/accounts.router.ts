import express, { Router } from 'express'
import passport from 'passport'
import {
  find,
  findMyAccount,
  findOne,
  update,
  deleteOne,
} from '../controllers/accounts.controller'

const accountsRouter = express.Router()

function accountsRoutes(): Router {
  accountsRouter.route('/').get(find)
  accountsRouter
    .route('/me')
    .get(passport.authenticate('jwt', { session: false }), findMyAccount)
    .put(update)
    .delete(deleteOne)
  accountsRouter.route('/:id').get(findOne)

  return accountsRouter
}

export default accountsRoutes

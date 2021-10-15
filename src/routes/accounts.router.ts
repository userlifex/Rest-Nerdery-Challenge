import express, { Router } from 'express'
import asyncHandler from 'express-async-handler'
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
  accountsRouter.route('/').get(asyncHandler(find))

  accountsRouter
    .route('/me')
    .get(
      passport.authenticate('jwt', { session: false }),
      asyncHandler(findMyAccount),
    )
    .put(passport.authenticate('jwt', { session: false }), asyncHandler(update))
    .delete(
      passport.authenticate('jwt', { session: false }),
      asyncHandler(deleteOne),
    )

  accountsRouter.route('/:id').get(findOne)

  return accountsRouter
}

export default accountsRoutes

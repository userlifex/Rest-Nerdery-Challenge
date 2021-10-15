import express, { Router, Request, Response } from 'express'
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
    .get(
      findMyAccount,
      passport.authenticate('jwt', { session: false }),
      (req: Request, res: Response) => {
        res.send(req.user)
      },
    )
    .put(update)
    .delete(deleteOne)
  accountsRouter.route('/:id').get(findOne)

  return accountsRouter
}

export default accountsRoutes

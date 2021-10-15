import express, { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { login, logout, signup } from '../controllers/auth.controller'

const authRouter = express.Router()

function authRoutes(): Router {
  authRouter.route('/login').post(login)
  authRouter.route('/logout').post(logout)
  authRouter.route('/signup').post(asyncHandler(signup))

  return authRouter
}

export default authRoutes

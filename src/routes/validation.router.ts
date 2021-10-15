import express, { Router } from 'express'
import validate from '../controllers/validation.controller'

const validationRouter = express.Router()

function validationRoutes(): Router {
  validationRouter.route('/validate-email/:tokenEmail').post(validate)

  return validationRouter
}

export default validationRoutes

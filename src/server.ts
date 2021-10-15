import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv' /* load environment variables */
import { HttpError } from 'http-errors'
import router from './router'

dotenv.config()

const app = express()
const PORT = process.env.API_PORT || 3000
const ENVIROMENT = process.env.NODE_ENV || 'development'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router(app))

app.use('/*', (req: Request, res: Response) => {
  res.status(404)
  res.json({
    title: 'Not foud',
    description: 'Page not found',
    code: 404,
  })
})

function errorHandler(
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void {
  if (ENVIROMENT !== 'development') {
    // eslint-disable-next-line no-console
    console.error(err.message)
    // eslint-disable-next-line no-console
    console.error(err.stack || '')
  }

  res.status(err.status ?? 500)
  res.json(err)
}

app.use(errorHandler)
app.listen(PORT, async () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${PORT} in ${ENVIROMENT}`)
})

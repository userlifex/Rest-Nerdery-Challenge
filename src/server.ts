import express, { Request, Response } from 'express'
import dotenv from 'dotenv' /* load environment variables */
import router from './router'

dotenv.config()

const app = express()
const PORT = process.env.API_PORT || 3000
const ENVIRONMENT = process.env.NODE_ENV || 'development'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router(app))

app.use('/', (req: Request, res: Response) => {
  res.json({ name: 'foo', lastName: 'bar' })
})

app.listen(PORT, async () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${PORT} in ${ENVIRONMENT}`)
})

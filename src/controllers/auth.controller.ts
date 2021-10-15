import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import CreateAccountDto from '../dtos/accounts/req/create-account.dto'
import AccountsService from '../services/accounts.service'
import { getToken } from '../utils'
import sendEmail from '../services/send-email.service'

const login = async (req: Request, res: Response) => {
  const { email } = req.body
  try {
    await AccountsService.existsEmail(email)
    const token = getToken()
    const ga = await sendEmail(email, token)

    res.send({ token, ga })
  } catch (error) {
    res.status(400).send({ title: 'Bad request', description: error })
  }
}

const logout = (req: Request, res: Response) => {
  res.send({
    message: 'logout',
  })
}

const signup = async (req: Request, res: Response) => {
  const dto = plainToClass(CreateAccountDto, req.body)
  try {
    await dto.isValid()
    const account = await AccountsService.create(dto)
    res.send({
      account,
    })
  } catch (error) {
    res.status(400).send({ error })
  }
}

export { login, logout, signup }

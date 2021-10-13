import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import CreateAccountDto from '../dtos/accounts/req/create-account.dto'
import AccountsService from '../services/accounts.service'

const login = (req: Request, res: Response) => {
  res.send({
    message: 'login',
  })
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
  } catch (error) {
    res.send({ error })
  }

  res.send({
    dto,
    body: req.body,
    message: 'signup',
  })
}

export { login, logout, signup }

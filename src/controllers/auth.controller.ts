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
    const account = await AccountsService.create(dto)
    res.send({
      account,
    })
  } catch (error) {
    res.status(400).send({ error })
  }
}

export { login, logout, signup }

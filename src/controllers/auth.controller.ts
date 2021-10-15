import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import CreateAccountDto from '../dtos/accounts/req/create-account.dto'
import AccountsService from '../services/accounts.service'
import LoginDto from '../dtos/auths/req/login.dto'
import AuthsService from '../services/auths.service'

const login = async (req: Request, res: Response) => {
  const dto = plainToClass(LoginDto, req.body)
  try {
    await dto.isValid()
    const token = await AuthsService.login(dto)

    res.send({ data: token })
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

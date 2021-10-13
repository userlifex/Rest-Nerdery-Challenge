import { Request, Response } from 'express'

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

const signup = (req: Request, res: Response) => {
  res.send({
    message: 'signup',
  })
}

export { login, logout, signup }

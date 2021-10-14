import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import AccountsService from '../services/accounts.service'
import AccountsPublicDto from '../dtos/accounts/res/accounts-public.dto'

const find = async (req: Request, res: Response) => {
  const accounts = await AccountsService.find()
  const accountsdto = plainToClass(AccountsPublicDto, accounts)
  res.status(200).send({
    data: accountsdto,
  })
}

const findMyAccount = (req: Request, res: Response) => {
  res.send({
    message: 'findMyAccount',
  })
}

const update = (req: Request, res: Response) => {
  res.send({
    message: 'update',
  })
}

const deleteOne = (req: Request, res: Response) => {
  res.send({
    message: 'deleteOne',
  })
}

const findOne = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const account = await AccountsService.findOne(id)
    const accountdto = plainToClass(AccountsPublicDto, account)
    res.status(200).send({
      data: accountdto,
    })
  } catch (error) {
    res.status(404).send({ error })
  }
}

export { find, findMyAccount, findOne, update, deleteOne }

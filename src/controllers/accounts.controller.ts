import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import AccountsService from '../services/accounts.service'
import AccountsPublicDto from '../dtos/accounts/res/accounts-public.dto'
import UpdateAccountDto from '../dtos/accounts/req/update-account.dto'

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

const update = async (req: Request, res: Response) => {
  const { accountId } = req.body
  try {
    const dto = plainToClass(UpdateAccountDto, req.body)
    await dto.isValid()
    const account = await AccountsService.update(accountId, dto)
    res.status(200).send({
      data: account,
    })
  } catch (error) {
    res.status(400).send({ error })
  }
}

const deleteOne = async (req: Request, res: Response) => {
  const { accountId } = req.body
  try {
    const account = await AccountsService.delete(accountId)
    res.status(200).send({
      data: account,
    })
  } catch (error) {
    res.status(400).send({ error })
  }
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

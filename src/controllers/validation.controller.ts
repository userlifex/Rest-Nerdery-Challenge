import { plainToClass } from 'class-transformer'
import { Request, Response } from 'express'
import ValidateEmailDto from '../dtos/validate/req/validate-email.dto'
import ValidationsService from '../services/validations.service'

const validate = async (req: Request, res: Response) => {
  const { tokenEmail } = req.params
  const { email } = req.body
  const dto = plainToClass(ValidateEmailDto, { email, tokenEmail })
  try {
    await dto.isValid()
    const account = await ValidationsService.validateEmail(dto)
    res.send({ data: account, message: 'email validate' })
  } catch (error) {
    res.status(400).send({ title: 'Bad request', description: error })
  }
}

export default validate

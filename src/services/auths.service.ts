import bcrypt from 'bcryptjs'
import createError from 'http-errors'
import dotenv from 'dotenv' /* load environment variables */
import LoginDto from '../dtos/auths/req/login.dto'
import prisma from './prisma.service'

dotenv.config()
export default class AuthsService {
  static async login(input: LoginDto): Promise<boolean> {
    const account = await prisma.account.findUnique({
      where: { email: input.email },
      rejectOnNotFound: false,
    })

    if (!account) {
      throw new createError.UnprocessableEntity('invalid credentials')
    }

    const isValid = await bcrypt.compare(input.password, account.password)

    if (!isValid) {
      throw new createError.UnprocessableEntity('invalid credentials')
    }

    return isValid
  }
}

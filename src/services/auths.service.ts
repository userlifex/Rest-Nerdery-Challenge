import bcrypt from 'bcryptjs'
import createError from 'http-errors'
import LoginDto from '../dtos/auths/req/login.dto'
import TokenDto from '../dtos/auths/res/token.dto'
import { generateJWTToken } from '../utils'
import prisma from './prisma.service'

export default class AuthsService {
  static async login(input: LoginDto): Promise<TokenDto> {
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

    return {
      token: generateJWTToken(account.id),
    }
  }
}

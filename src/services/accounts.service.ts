import { Prisma, Account } from '@prisma/client'
import createError from 'http-errors'
import prisma from './prisma.service'

export default class AccountsService {
  static async find(): Promise<Account[]> {
    return prisma.account.findMany({})
  }

  static async findOne(id: string): Promise<Account> {
    return prisma.account.findUnique({ where: { id } })
  }

  static async update(id: string, input: string): Promise<Account> {
    try {
      return prisma.account.update({
        data: input,
        where: {
          id,
        },
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new createError.UnprocessableEntity('email already taken')
        }
      }

      throw error
    }
  }

  /* eslint-disable */
  static async create(input: any): Promise<Account> {
    input = {
      name: 'miley',
      email: 'miley@gmail.com',
      password: '1234',
      tokenEmail: '12',
      isPublicName: true,
      isPublicEmail: true,
      verifiedAt: new Date(),
    }

    return prisma.account.create({ data: input })
  }

  static async delete(id: string): Promise<Account> {
    console.log('')
    const account = await prisma.account.delete({
      where: {
        id,
      },
    })
    return account
  }
}

import { Prisma, Report } from '@prisma/client'
import createError from 'http-errors'
import prisma from './prisma.service'

export default class ReportsService {
  static async find(): Promise<Report[]> {
    return prisma.report.findMany({})
  }

  static async findOne(id: string): Promise<Report> {
    return prisma.report.findUnique({ where: { id } })
  }

  static async update(id: string, input: any): Promise<Report> {
    try {
      return prisma.report.update({
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
  static async create(input: any): Promise<Report> {
    input = {}

    return prisma.report.create({ data: input })
  }

  static async delete(id: string): Promise<Report> {
    return await prisma.report.delete({
      where: {
        id,
      },
    })
  }
}

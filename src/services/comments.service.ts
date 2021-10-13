import { Prisma, Comment } from '@prisma/client'
import createError from 'http-errors'
import prisma from './prisma.service'

export default class CommentsService {
  static async find(): Promise<Comment[]> {
    return prisma.comment.findMany({})
  }

  static async findOne(id: string): Promise<Comment> {
    return prisma.comment.findUnique({ where: { id } })
  }

  static async update(id: string, input: string): Promise<Comment> {
    try {
      return prisma.comment.update({
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
  static async create(input: any): Promise<Comment> {
    input = {}

    return prisma.comment.create({ data: input })
  }

  static async delete(id: string): Promise<Comment> {
    return await prisma.comment.delete({
      where: {
        id,
      },
    })
  }
}

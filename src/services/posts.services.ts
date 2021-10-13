import { Prisma, Post } from '@prisma/client'
import createError from 'http-errors'
import prisma from './prisma.service'

export default class PostsService {
  static async find(): Promise<Post[]> {
    return prisma.post.findMany({})
  }

  static async findOne(id: string): Promise<Post> {
    return prisma.post.findUnique({ where: { id } })
  }

  static async update(id: string, input: string): Promise<Post> {
    try {
      return prisma.post.update({
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
  static async create(input: any): Promise<Post> {
    input = {}

    return prisma.post.create({ data: input })
  }

  static async delete(id: string): Promise<Post> {
    return await prisma.post.delete({
      where: {
        id,
      },
    })
  }
}

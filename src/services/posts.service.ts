import { Prisma, Post } from '@prisma/client'
import createError from 'http-errors'
import CreatePostDto from '../dtos/posts/req/create-post.dto'
import EditPostDto from '../dtos/posts/req/edit-post.dto'
import prisma from './prisma.service'

export default class PostsService {
  static async find(): Promise<Post[]> {
    return prisma.post.findMany({})
  }

  static async findOne(id: string): Promise<Post> {
    return prisma.post.findUnique({ where: { id } })
  }

  static async findByAccountId(accountId: string): Promise<Post[]> {
    return prisma.post.findMany({ where: { accountId, draft: false } })
  }

  static async findPost(id: string): Promise<Post> {
    return prisma.post.findFirst({
      where: {
        id,
        draft: false,
      },
    })
  }

  static async findAllPosts(): Promise<Post[]> {
    return prisma.post.findMany({ where: { draft: false } })
  }

  static async findMyPosts(id: string): Promise<Post[]> {
    return prisma.post.findMany({ where: { id } })
  }

  static async update(id: string, input: EditPostDto): Promise<Post> {
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

  static async create(input: CreatePostDto): Promise<Post> {
    return prisma.post.create({ data: input })
  }

  static async delete(id: string): Promise<Post> {
    return prisma.post.delete({
      where: {
        id,
      },
    })
  }

  static async exists(id: string): Promise<boolean> {
    const count = await prisma.post.count({ where: { id } })

    return !!count
  }
}

import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import CommentReportDto from '../dtos/reports/req/comment-report.dto'
import ReportsService from '../services/reports.service'
import PostReportDto from '../dtos/reports/req/post-report.dto'

const commentReport = async (req: Request, res: Response) => {
  const { commentId } = req.params
  const dto = plainToClass(CommentReportDto, { commentId, ...req.body })
  await dto.isValid()
  const report = await ReportsService.reportComment(dto)

  res.send({
    data: report,
    message: 'Comments report create',
  })
}

const postReport = async (req: Request, res: Response) => {
  const { postId } = req.params
  const dto = plainToClass(PostReportDto, { postId, ...req.body })
  await dto.isValid()
  const report = await ReportsService.reportPost(dto)

  res.send({
    data: report,
    message: 'post report create',
  })
}

export { commentReport, postReport }

import { Expose, Exclude } from 'class-transformer'
import {
  IsBoolean,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator'
import BaseDto from '../../base.dto'

@Exclude()
export default class UpdateCommentDto extends BaseDto {
  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly content: string

  @Expose()
  @IsNumber()
  @IsOptional()
  readonly numLikes: number

  @Expose()
  @IsNumber()
  @IsOptional()
  readonly numDislikes: number

  @Exclude()
  @IsBoolean()
  @IsOptional()
  readonly draft: boolean
}

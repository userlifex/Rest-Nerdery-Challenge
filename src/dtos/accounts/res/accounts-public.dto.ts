import { Expose, Exclude, Transform } from 'class-transformer'
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator'
import BaseDto from '../../base.dto'

@Exclude()
export default class AccountsPublicDto extends BaseDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  readonly id: string

  @Exclude()
  @IsBoolean()
  readonly isPublicName: boolean

  @Exclude()
  @IsBoolean()
  readonly isPublicEmail: boolean

  @Expose()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  readonly email: string

  @Expose()
  @IsString()
  @IsOptional()
  readonly password: string

  @Expose()
  @IsString()
  @IsOptional()
  readonly username: string

  @Expose()
  @IsString()
  @IsNotEmpty()
  readonly name: string

  @Expose()
  @Transform(({ value }) => value?.toISOString())
  readonly createdAt: Date

  @Expose()
  @Transform(({ value }) => value?.toISOString())
  readonly updatedAt: Date
}

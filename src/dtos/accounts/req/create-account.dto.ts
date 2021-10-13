import BaseDto from '../../base.dto'

export default class CreateAccountDto extends BaseDto {
  readonly email: string

  readonly password: string

  readonly username: string

  readonly name: string

  readonly isPublicEmail: boolean

  readonly isPublicName: boolean

  readonly isModerator: boolean




}

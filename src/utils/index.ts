import { TokenGenerator } from 'ts-token-generator'
import jwt from 'jsonwebtoken'

function getToken(): string {
  const tokGen = new TokenGenerator()
  return tokGen.generate()
}

function generateJWTToken(sub: string): string {
  return jwt.sign(
    {
      sub,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    process.env.SECRET_JWT_KEY as string,
  )
}

export { getToken, generateJWTToken }

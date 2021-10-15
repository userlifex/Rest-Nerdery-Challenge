import { TokenGenerator } from 'ts-token-generator'

function getToken(): string {
  const tokGen = new TokenGenerator()
  return tokGen.generate()
}

function hello(): void {
  throw new Error('')
}

export { getToken, hello }

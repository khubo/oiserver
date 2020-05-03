
import { sign, verify } from 'jsonwebtoken'
import config from '../config'

const { secretKey, tokenExpiry: expiresIn } = config

export const generateToken = (payload: object) =>
  sign(payload, secretKey, {
    expiresIn
  })

export const verifyToken = (token: string) =>
  verify(token, secretKey)



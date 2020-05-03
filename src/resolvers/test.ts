import { generateToken } from '../utils/token'

export default {
  Query: {
    greet: (_: void, { name }: { name: string }): string => `hello ${name || "there"}`,
    getToken: async (_: void, { type }: { type: string }) => {
      try {
        return generateToken({
          type
        })
      } catch (e) {
        throw new Error("error generating token")
      }
    }
  }
}
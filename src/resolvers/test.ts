export default {
  Query: {
    greet: (_: void, { name }: { name: string }): string => `hello ${name || "there"}`
  }
}
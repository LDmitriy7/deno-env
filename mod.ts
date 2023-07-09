import "https://deno.land/std@0.182.0/dotenv/load.ts"

class Env {
  str(key: string) {
    const value = Deno.env.get(key)
    if (!value) throw new EnvError(key, "not set")
    return value
  }
  int(key: string) {
    const value = Number(this.str(key))
    if (!Number.isInteger(value)) throw new EnvError(key, "not int")
    return value
  }
}

class EnvError extends Error {
  constructor(key: string, description: string) {
    super(`Environment variable "${key}" error: ${description}`)
  }
}

const env = new Env()
export default env

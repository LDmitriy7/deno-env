import "https://deno.land/std@0.182.0/dotenv/load.ts"

class Env {
  str(key: string) {
    const value = Deno.env.get(key)
    if (!value) throw new EnvError(key)
    return value
  }
}

class EnvError extends Error {
  constructor(key: string) {
    super(`You must set "${key}" environment variable`)
  }
}

const env = new Env()
export default env

```typescript
import env from "https://deno.land/x/parse_env/mod.ts"

const BOT_TOKEN = env.str("BOT_TOKEN") // throws error on missing
```

import { defineConfig } from 'prisma/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

export default defineConfig({
  schema: './prisma/schema.prisma',
  migrate: {
    adapter: (env) => {
      const pool = new Pool({
        connectionString: env.POSTGRES_URL_NON_POOLING
      })
      return new PrismaPg(pool)
    }
  }
})

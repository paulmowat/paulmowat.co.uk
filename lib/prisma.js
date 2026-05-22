import { PrismaClient } from '@prisma/client'
import { neon } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'

function createPrismaClient () {
  const sql = neon(process.env.POSTGRES_PRISMA_URL)
  const adapter = new PrismaNeon(sql)
  return new PrismaClient({ adapter })
}

let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = createPrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = createPrismaClient()
  }
  prisma = global.prisma
}

export default prisma

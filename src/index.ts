import express from 'express'
import rootRouter from './routers'
import databaseService from './services/database.services'
const PORT = 3005
const app = express()

app.use(express.json())

app.use('/api/v1', rootRouter)

app.listen(PORT, () => {
  console.log(`Server run in port ${PORT}`)
  databaseService.connect()
})

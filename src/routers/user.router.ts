import express, { Request, Response } from 'express'
import { registerController } from '../controllers/users.controller'

const userRouter = express.Router()

userRouter.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Done' })
})
userRouter.post('/register', registerController)

export default userRouter

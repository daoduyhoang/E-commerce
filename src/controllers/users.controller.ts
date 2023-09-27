import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import userServices from '~/services/users.services'

export const registerController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  try {
    const result = await userServices.register({ name, email, password })
    return res.status(200).send(result)
  } catch (error) {
    return res.status(400).json({
      error: 'Error'
    })
  }

  return res.status(200).json({})
}

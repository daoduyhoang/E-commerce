import User from '~/models/schemas/User.schema'
import databaseService from './database.services'

class UserServices {
  register = async (data: { name: string; email: string; password: string }) => {
    const result = await databaseService.users.insertOne(
      new User({
        ...data
      })
    )

    databaseService.client.close()

    return result
  }
}

const userServices = new UserServices()

export default userServices

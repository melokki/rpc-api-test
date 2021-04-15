import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Actions } from 'App/actions/users/UsersActions'

export default class RpcController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const operation = Object.keys(request.all())[1]
      const { module } = request.all()
      const actions = `${module.replace(/^\w/, (c) => c.toUpperCase())}Actions`
      const moduleActions = new (<any>Actions)[actions]()
      const params = request.all()[operation]
      const results = await moduleActions[operation](params)

      return response.ok({
        message: 'ok',
        results: results,
      })
    } catch (error) {
      console.log(error)
      return response.badRequest({
        message: 'Invalid request',
      })
    }
  }
}

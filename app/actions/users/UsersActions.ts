import User from 'App/Models/User'

export namespace Actions {
  export class UsersActions {
    public async getInvoices(params: { userId: string }) {
      try {
        const user = await User.find(params.userId)
        await user?.preload('invoices')

        return user?.invoices
      } catch (error) {
        throw error
      }
    }
  }
}

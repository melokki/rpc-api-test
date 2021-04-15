import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { InvoiceFactory, UserFactory } from 'Database/factories'

export default class InvoiceSeederSeeder extends BaseSeeder {
  public async run() {
    for (let i = 0; i < 10; i++) {
      const user = await UserFactory.create()
      await InvoiceFactory.merge({ userId: user.id }).createMany(30)
    }
  }
}

import Factory from '@ioc:Adonis/Lucid/Factory'
import Invoice from 'App/Models/Invoice'
import User from 'App/Models/User'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }
}).build()

export const InvoiceFactory = Factory.define(Invoice, ({ faker }) => {
  return {
    id: faker.datatype.uuid(),
    userId: faker.datatype.uuid(),
    invoiceNo: faker.datatype.string(),
  }
}).build()

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateInvoices extends BaseSchema {
  protected tableName = 'invoices'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('gen_random_uuid()').knexQuery)
      table.uuid('user_id').index()
      table.string('invoice_no')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

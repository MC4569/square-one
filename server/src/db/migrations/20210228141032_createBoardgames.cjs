/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('boardgames', table => {
    table.bigIncrements('id')
    table.string('title').notNullable()
    table.string('brandName').notNullable()
    table.string('description', 1000).notNullable()
    table.string('developer').notNullable()
    table.bigInteger('genreId')
      .notNullable()
      .unsigned()
      .index()
      .references('genres.id')
    table.timestamp('createdAt')
      .notNullable()
      .defaultTo(knex.fn.now())
    table.timestamp('updatedAt')
      .notNullable()
      .defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists('boardgames')
}


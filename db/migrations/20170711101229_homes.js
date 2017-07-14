'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('homes', (table) => {
    table.increments();
    table.string('location').notNullable();
    table.string('address').notNullable();
    table.string('zip_code').notNullable();
    table.text('img_url');
    table.integer('square_footage').notNullable();
    table.integer('bedrooms').notNullable();
    table.integer('bathrooms').notNullable();
    table.integer('home_value').notNullable();
    table.text('description').notNullable();
    table.integer('owner_id').references('id').inTable('users');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('homes');
};

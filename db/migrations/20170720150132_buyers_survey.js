'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('buyers_survey', (table) => {
    table.increments();
    table.string('location').notNullable();
    table.integer('square_footage').notNullable();
    table.integer('home_value').notNullable();
    table.integer('bedrooms').notNullable();
    table.integer('bathrooms');
    table.integer('user_id');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('buyers_survey');
};

'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('buyers_survey', (table) => {
    table.increments();
    table.string('location').notNullable();
    table.string('square_footage').notNullable().defaultTo('');
    table.string('home_value').notNullable();
    table.string('bedrooms').notNullable();
    table.string('bathrooms');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('buyers_survey');
};

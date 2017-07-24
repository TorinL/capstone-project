'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('buyer_homes', (table) => {
    table.increments();
    table.integer('home_id').references('id').inTable('homes');
    table.integer('seller_id').references('id').inTable('users');
    table.timestamps(true, true);
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('buyer_homes');
};

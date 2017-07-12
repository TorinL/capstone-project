'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('buyerHomes', (table) => {
    table.increments();
    table.integer('home_id').references('id').inTable('homes');
    table.integer('buyer_id').references('id').inTable('users');
    table.timestamps(true, true);
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('buyerHomes');
};

'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.boolean('seller').notNullable()
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable()
    table.string('email').unique().notNullable()
    table.string('phone_number').notNullable()
    table.text('profile_url')
    table.specificType('hashed_password', 'char(60)').notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

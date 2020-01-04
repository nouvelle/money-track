exports.up = function(knex) {
  return knex.schema.createTable("track", t => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("user_id")
      .unsigned()
      .notNullable();

    t.foreign("user_id")
      .references("user_id")
      .inTable("userlist");

    t.timestamp("date") // maximum length of 300 characters
      .notNullable(); // add a not-null constraint to this column

    t.string("item", 20) // maximum length of 300 characters
      .notNullable(); // add a not-null constraint to this column

    t.integer("price", 10) // maximum length of 300 characters
      .notNullable(); // add a not-null constraint to this column

    t.integer("payment", 10) // maximum length of 300 characters
      .notNullable(); // add a not-null constraint to this column

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("track");
};

exports.up = function(knex) {
  return knex.schema.createTable("track", t => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("user_id")
      .unsigned()
      .notNullable();

    t.foreign("user_id").references("userlist.user_id");

    t.integer("year") // -2147483648 ~ +2147483647
      .notNullable(); // add a not-null constraint to this column
    t.integer("month") // -2147483648 ~ +2147483647
      .notNullable(); // add a not-null constraint to this column
    t.integer("day") // -2147483648 ~ +2147483647
      .notNullable(); // add a not-null constraint to this column

    t.string("item", 20) // maximum length of 20 characters
      .notNullable(); // add a not-null constraint to this column

    t.integer("price") // -2147483648 ~ +2147483647
      .notNullable(); // add a not-null constraint to this column

    t.integer("payment") // -2147483648 ~ +2147483647
      .notNullable(); // add a not-null constraint to this column

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("track");
};

exports.up = function(knex) {
  return knex.schema.createTable("userlist", t => {
    t.string("user_id")
      .unique()
      .index(); // index this column

    t.string("name", 20) // maximum length of 300 characters
      .notNullable(); // add a not-null constraint to this column

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("userlist");
};

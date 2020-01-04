exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("track")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("track").insert([
        {
          user_id: "eriko",
          date: new Date(),
          item: "coffee",
          price: 400,
          payment: 1
        }
      ]);
    });
};

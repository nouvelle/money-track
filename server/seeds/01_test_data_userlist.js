exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("userlist")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("userlist").insert([
        {
          user_id: "eriko",
          name: "eriko"
        }
      ]);
    });
};

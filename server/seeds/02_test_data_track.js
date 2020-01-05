exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("track")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("track").insert([
        {
          user_id: "eriko",
          year: 2020,
          month: 1,
          day: 1,
          item: "coffee",
          price: 400,
          payment: "Cash"
        },
        {
          user_id: "eriko",
          year: 2020,
          month: 1,
          day: 1,
          item: "cake",
          price: 550,
          payment: "Edy"
        },
        {
          user_id: "eriko",
          year: 2020,
          month: 1,
          day: 1,
          item: "clothes",
          price: 5500,
          payment: "Amex"
        },
        {
          user_id: "eriko",
          year: 2020,
          month: 1,
          day: 2,
          item: "snack",
          price: 100,
          payment: "Edy"
        },
        {
          user_id: "eriko",
          year: 2020,
          month: 1,
          day: 2,
          item: "lunch",
          price: 650,
          payment: "Amex"
        }
      ]);
    });
};

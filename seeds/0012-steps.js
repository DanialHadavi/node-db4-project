exports.seed = function (knex) {
  return knex("steps")
    .truncate()
    .then(function () {
      return knex("steps").insert([
        {
          recipe_id: 1,
          step_number: 1,
          description: "Grab the egg/s",
        },
        {
          recipe_id: 1,
          step_number: 2,
          description: "Put it in a hot oiled pan",
        },
        { recipe_id: 1, step_number: 3, description: "making eggs" },
      ]);
    });
};

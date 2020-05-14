exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        { ingredient_name: "eggs", ingredient_amount: 1 },
        { ingredient_name: "cooking pan", ingredient_amount: 1 },
        { ingredient_name: "oil", ingredient_amount: 1.5 },
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stations').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('stations').insert({id: 0, name: 'Downtown'}),
        knex('stations').insert({id: 1, name: 'Elm Street'}),
        knex('stations').insert({id: 2, name: 'Forest Gardens'}),
        knex('stations').insert({id: 3, name: 'Annex'}),
        knex('stations').insert({id: 4, name: '10th Ave'}),
        knex('stations').insert({id: 5, name: 'Waterfront'}),
        knex('stations').insert({id: 6, name: 'Colosseum'}),
        knex('stations').insert({id: 7, name: 'Central Station'}),
        knex('stations').insert({id: 8, name: 'Parkside'}),
        knex('stations').insert({id: 9, name: 'Grand Boulevard'}),
        knex('stations').insert({id: 10, name: 'Monument Valley'}),
        knex('stations').insert({id: 11, name: 'Museum Isle'}),

        knex('passengers').insert({id: 0, name: 'Digna'}),
        knex('passengers').insert({id: 1, name: 'Kenton'}),
        knex('passengers').insert({id: 2, name: 'Min'}),
        knex('passengers').insert({id: 3, name: 'Toni'}),
        knex('passengers').insert({id: 4, name: 'Danial'}),

        knex('trains').insert({id: 0, capacity: 200}),
        knex('trains').insert({id: 1, capacity: 200}),
        knex('trains').insert({id: 2, capacity: 200}),
        knex('trains').insert({id: 3, capacity: 200})
      ]);
    });
};

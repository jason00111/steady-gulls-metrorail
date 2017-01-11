
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stations').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('stations').insert({id: 0, colName:'Downtown'}),
        knex('stations').insert({id: 1, colName:'Elm Street'}),
        knex('stations').insert({id: 2, colName:'Forest Gardens'}),
        knex('stations').insert({id: 3, colName:'Annex'}),
        knex('stations').insert({id: 4, colName:'10th Ave'}),
        knex('stations').insert({id: 5, colName:'Waterfront'}),
        knex('stations').insert({id: 6, colName:'Colosseum'}),
        knex('stations').insert({id: 7, colName:'Central Station'}),
        knex('stations').insert({id: 8, colName:'Parkside'}),
        knex('stations').insert({id: 9, colName:'Grand Boulevard'}),
        knex('stations').insert({id: 10, colName:'Monument Valley'}),
        knex('stations').insert({id: 11, colName:'Museum Isle'})

        knex('passengers').insert({id: 0, colName:'Digna'})
        knex('passengers').insert({id: 1, colName:'Kenton'})
        knex('passengers').insert({id: 2, colName:'Min'})
        knex('passengers').insert({id: 3, colName:'Toni'})
        knex('passengers').insert({id: 4, colName:'Danial'})

        knex('trains').insert({id: 4, colName:'Danial'})
      ]);
    });
};

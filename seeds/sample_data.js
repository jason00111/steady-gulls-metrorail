
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

        knex('passengers').insert({id: 0, name: 'Cara'}),
        knex('passengers').insert({id: 1, name: 'Marlo'}),
        knex('passengers').insert({id: 2, name: 'Lester'}),
        knex('passengers').insert({id: 3, name: 'France'}),
        knex('passengers').insert({id: 4, name: 'Ninfa'}),
        knex('passengers').insert({id: 5, name: 'Tamie'}),
        knex('passengers').insert({id: 6, name: 'Kimi'}),
        knex('passengers').insert({id: 7, name: 'Riley'}),
        knex('passengers').insert({id: 8, name: 'Megan'}),
        knex('passengers').insert({id: 9, name: 'Sara'}),
        knex('passengers').insert({id: 10, name: 'Pat'}),
        knex('passengers').insert({id: 11, name: 'Veronica'}),
        knex('passengers').insert({id: 12, name: 'Rueben'}),
        knex('passengers').insert({id: 13, name: 'Bridgette'}),
        knex('passengers').insert({id: 14, name: 'Blondell'}),
        knex('passengers').insert({id: 15, name: 'Kami'}),
        knex('passengers').insert({id: 16, name: 'Senaida'}),
        knex('passengers').insert({id: 17, name: 'Hannelore'}),
        knex('passengers').insert({id: 18, name: 'Terrilyn'}),
        knex('passengers').insert({id: 19, name: 'Chadwick'}),

        knex('trains').insert({
          id: 0,
          capacity: 200,
          passengers: [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}],
          stationIndex: 0
        }),
        knex('trains').insert({
          id: 1,
          capacity: 5,
          passengers: [{id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}],
          stationIndex: 1
        }),
        knex('trains').insert({
          id: 2,
          capacity: 150,
          passengers: [{id: 10}, {id: 11}, {id: 12}, {id: 13}, {id: 14}],
          stationIndex: 2
        }),
        knex('trains').insert({
          id: 3,
          capacity: 300,
          passengers: [{id: 15}, {id: 16}, {id: 17}, {id: 18}, {id: 19}],
          stationIndex: 3
        })
      ]);
    });
};

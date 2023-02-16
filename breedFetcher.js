const request = require('request');
const URL = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = function(breed, callback) {
  request(`${URL}${breed}`, 'utf8', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    let desc = JSON.parse(body)[0];
    if (desc === undefined) {
      return callback(`${breed} not found.`, null);
    }
    desc = desc.description;
    return callback(null, desc);
  });
};

module.exports = { fetchBreedDescription };

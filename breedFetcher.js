const request = require('request');
const URL = `https://api.thecaapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = function(breed, callback) {
  request(`${URL}${breed}`, 'utf8', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const desc = JSON.parse(body)[0];
    return callback(null, desc);
  });
};


module.exports = { fetchBreedDescription };

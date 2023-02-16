const request = require('request');

const breedDetailsFromAPI = (breed => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, 'utf8', (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  });
});

breedDetailsFromAPI(process.argv.slice(2));
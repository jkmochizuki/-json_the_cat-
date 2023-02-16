const request = require('request');

const breedDetailsFromAPI = (breed => {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=`;
  request(`${URL}${breed}`, 'utf8', (error, response, body) => {
    try {
      let data = JSON.parse(body);
      if (body === "[]") data = `ERROR: ${breed} not found.`;
      console.log(data);
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  });
});

breedDetailsFromAPI(process.argv.slice(2));
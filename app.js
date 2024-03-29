const app = require('axios');
app.get('https://api.thedogapi.com/v1/breeds/2')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
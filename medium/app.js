const fs = require('fs');

fs.readFile('./medium/planets.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
})
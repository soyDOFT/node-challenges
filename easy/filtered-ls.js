const fs = require('fs');
const file = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(file, (err, list) => {
    if (err) return console.log(err);
    list.forEach((file) => {
        if (file.slice(-(ext.length)) === ext) {
            console.log(file);
        }
    })
});
module.exports = function (directory, ext, callback) {
    const fs = require('fs');
    fs.readFile(directory, 'utf8', (err, data) => {
        if (err) return console.log(err);
        data.forEach((file) => {
            if (file.pathExt() === "." + ext) {
                console.log(file);
            }
        });
    })
}
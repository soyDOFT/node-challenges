const mymodule = require('./mymodule');
const directory = process.argv[2];
const ext = "." + process.argv[3];

mymodule(directory, ext, callback);

function callback() {
    
}
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

console.log(argv);

/* const [,, arg3 = "base=1"] = process.argv;
const [, base] = arg3.split("="); */

crearArchivo(argv.b, argv.l, argv.h)
.then(msg => console.log(msg.rainbow))
.catch(err => console.log(err));


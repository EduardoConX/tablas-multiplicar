const fs = require("fs");
const colors = require('colors');
const crearArchivo = async (base = 1, listar = false, hasta = 10) => {

    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${"x".red} ${i} = ${base * i} \n`;
        }

        if (listar) {
            console.log(colors.blue(consola));
        }

        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
        return "Archivo creado";
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}
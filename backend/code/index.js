const app = require("./app");
const {connect} = require("./database")

async function run() {
    //Mongo
    await connect();
    //Express
    await app.listen(4000);
    console.log('Servidor corriendo en el puerto 4000!')
}

run();
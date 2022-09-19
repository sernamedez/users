async function welcome (){
    try {
        let eso = ("Welcome to!!")
        return {
            message: eso,
            status: 200,
        }
    } catch (error) {
        return {
            message: "Ups algo salio mal",
            status: 500,
        }
    }
}

module.exports = {
    welcome
}
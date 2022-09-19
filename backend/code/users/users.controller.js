const usersService = require('./users.service')

async function gretting(_req, res, _next) {
    const response = await usersService.welcome();
    return res.status(response.status).json(response);
    }

module.exports = {
    gretting
}
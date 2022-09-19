const {Router} = require('express');
const usersController = require('./users.controller')
const router = Router();

router
    .get('/eso', usersController.gretting)
//     .get('/eso', (req, res)=> {
//         res.json(usersService.welcome)
// })

module.exports = router;
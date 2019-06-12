'use strict'

const userService = require('../services/users.service');
const UserService = new userService();

class usersController {
    async get(req, res) {
        const userId = req.params.userId;
        const response = await UserService.get(userId)
        .catch(e => console.error(e));

        return res.json({
            status: 200,
            message: response
        });
    }
}

module.exports = usersController;
const UserModel = require('../models/users.model');


class usersService {
    get(userId) {
        return UserModel.findById(userId);
    }
}

module.exports = usersService;
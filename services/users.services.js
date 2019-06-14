const UserModel = require('../models/users.model');


class usersService {
    get(userId) {
        return UserModel.findById(userId);
    }

    list(list = {}) {
        return UserModel.find(list);
    }

    create(payload) {
        let {userId, username, email, name, lastname, password, user_type, phone} = payload;
        payload = {userId, username, email, name, lastname, password, user_type, phone};
        let User = new UserModel(payload);
        return User.save();
    }

    delete(userId) {
        return UserModel.findByIdAndDelete(userId);
    }

    update(userId, payload) {
        return UserModel.findOneAndUpdate({_id: userId}, payload);
    }
}

module.exports = usersService;
const UserModel = require('../models/users.model');
const jwt = require('jsonwebtoken');
const config = require('../config').jwt;

class usersService {
    get(userId) {
        return UserModel.findById(userId);
    }

    list(list = {}) {
        return UserModel.find(list);
    }

    create(payload) {
        let {username, email, name, lastname, password, user_type, phone} = payload;
        payload = {username, email, name, lastname, password, user_type, phone};
        console.log('entre')
        jwt.sign({password: payload.password}, config.privateKey, {algorithm: 'HS256'}, function(err, token) {
            if(err) console.error(err);
            const {password, ...data} = payload;
            data.password = token;
            let User = new UserModel(data);
            return User.save();
        });        
    }

    delete(userId) {
        return UserModel.findByIdAndDelete(userId);
    }

    update(userId, payload) {
        return UserModel.findOneAndUpdate({_id: userId}, payload);
    }
}

module.exports = usersService;
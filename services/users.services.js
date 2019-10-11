const UserModel = require('../models/users.model');
const jwt = require('jsonwebtoken');
const config = require('../config').jwt;
const jwtEncode = require('../helpers/jwtEncode');
const jwtVerify = require('../helpers/jwtVerify');

class usersService {
    get(userId) {
        return UserModel.findById(userId, {password: 0});
    }

    list(list = {}) {
        return UserModel.find(list, {password: 0});
    }

    create(payload) {
        let {username, email, name, lastname, password, user_type, phone, provincia, localidad} = payload;
        payload = {username, email, name, lastname, password, user_type, phone, provincia, localidad};
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

    getByUsername(user) {
        return UserModel.findOne({username: user});
    }

    findEmail(email) {
        return UserModel.findOne({email: email});
    }

    async auth(payload) {
        let userData;
        let response;
        const user = payload.username;
        const pass = payload.password;
        try {
            userData = await this.getByUsername(user);
            if(!userData) return response = false;
            const jwtDecode = jwtVerify(userData.password);
            if(userData.username === user && pass === jwtDecode.password) {
                response = {
                    token: jwtEncode({user: user, name: userData.name, lastname: userData.lastname, email: userData.email, id: userData._id})
                }
            } 
        } catch (e) {
            console.error(e)
        }
        return response;
    }

    async isValidToken(token) {
        let response;
        try {
            response = await jwtVerify(token);
            if (response.message == 'jwt malformed') response = false;
        } catch (e) {
            console.error(e)
        }

        return response;
    }
}

module.exports = usersService;
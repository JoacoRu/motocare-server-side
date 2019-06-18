'use strict'

const userService = require('../services/users.services');
const UserService = new userService();

class usersController {
    async get(req, res) {
        const userId = req.params.userId;
        let response;
        try {
            response = await UserService.get(userId);
            if(!response) return res.status(404).send({message: 'Usuario no encontrado'});
        } catch(e) {
            return res.status(502).send({
                message: e
            });
        }

        return res.json({
            status: 200,
            message: response
        });
    }

    async list(req, res) {
        let response;
        try {
            response = await UserService.list({});
            if(!response) return res.status(404).send({message: 'No hay ningun usuario creado'});
        } catch (e) {
            return res.status(502).send({
                message: e
            });
        }

        return res.status(200).send({
            response
        })

    }

    async create(req, res) {
        const payload = req.body;
        
        let response;
        try {
            response = await UserService.create(payload);
        } catch (e) {
            return res.json({
                messgae: e
            }).status(502)
        }
        
        return res.json({
            status: 200,
            message: 'Usuario creado'
        });
    }

    async delete(req, res) {
        const userId = req.params.userId;
        let response;
        try {
            response = await UserService.delete(userId);
            if(!response) return res.status(404).send({
                message: "No existe un usuario con ese id"
            });
        } catch (e) {
            res.status(502).send({
                message: e
            });
        }

        return res.json({
            status: 200,
            message: response,
            action: "Usuario borrado"
        });
    }

    async update(req, res) {
        const userId = req.params.userId;
        const payload = req.body;
        let response;

        try {
            response = await UserService.update(userId, payload);
            if(!response) return res.status(502).send({
                message: 'No existe un usuario con esa id'
            });
        } catch (e) {
            res.status(502).send({message: e});
        }

        return res.json({
            status: 200,
            message: response,
            action: 'El usuario fue actualizado'
        });
    }
}

module.exports = usersController;
const AdminValidator = require("../utils/validator/admins.validator");

const express = require("express");
const router = express.Router();
const sign = require("jsonwebtoken");
const authenticate = require("passport");
const AdminService = require("../services/admin.service");
const ControllerResponse = require('../utils/res/controller.response');

// router.post('/login', function (req, res) {
//     authenticate('local', { session: false },
//         (err, admin, info) => {
//             if (err || !admin) {
//                 return res.status(401).json(
//                     ResponseFormat.error(info.code, info.message, null)
//                 );
//             }
//             req.login(admin, { session: false }, (err) => {
//                 if (err) {
//                     return res.status(401).json(
//                         ResponseFormat.error('UK0', err.message, err)
//                     );
//                 }
//                 const _admin = {
//                     username: admin.username
//                 };
//
//                 const token = sign(_admin, process.env.JWT_SECRET);
//                 return res.status(200).json(
//                     ResponseFormat.login_success({
//                         jwt: token
//                     })
//                 );
//             });
//         })(req, res);
// });


router.post('/',
    AdminValidator.addAdminValidationRules(),
    AdminValidator.validate,
    async (req, res) => {
        try {
            let result = await AdminService.addNewAdmin(req.body);
            return await ControllerResponse.postResponse(res, result);
        } catch (e) {
            console.trace(e);
            return await ControllerResponse.internalServerError(res, e);
        }
    });

router.get('/:id', async (req, res) => {
    try {
        let result = await AdminService.getAdminById(req.params.id);
        return await ControllerResponse.getResponse(res, result);
    } catch (error) {
        console.trace(error);
        return await ControllerResponse.internalServerError(res, error);
    }
});

router.get('/:role/:page/:limit', async (req, res) => {
    try {
        const payload = {
            role: req.params.role,
            page: req.params.page,
            limit: req.params.limit
        };
        let result = await AdminService.getAdminPagination(payload);
        return await ControllerResponse.getResponse(res, result);
    } catch (error) {
        console.trace(error);
        return await ControllerResponse.internalServerError(res, error)
    }
});

router.put('/update', async (req, res) => {
    try {
        const id = req.body.id;
        const payload = req.body;
        let result = await AdminService.updateAdmin(id, payload);
        return await ControllerResponse.updateResponse(res, result);
    } catch (error) {
        console.trace(error);
        return await ControllerResponse.internalServerError(res, error);
    }
});

router.put('/delete', async (req, res) => {
    try {
        const id = req.body.id;
        let result = await AdminService.deleteAdmin(id);
        return await ControllerResponse.deleteResponse(res, result);
    } catch (error) {
        console.trace(error);
        return await ControllerResponse.internalServerError(res, error);
    }
});

module.exports = router;

import { Router } from "express";
const router = Router();
import { sign } from "jsonwebtoken";
import { authenticate } from "passport";
import AdminService from "../services/admin.service";
import ControllerResponse from '../utils/res/controller.response';

router.post('/login', function (req, res) {
    authenticate('local', { session: false },
        (err, admin, info) => {
            if (err || !admin) {
                return res.status(401).json(
                    ResponseFormat.error(info.code, info.message, null)
                );
            }
            req.login(admin, { session: false }, (err) => {
                if (err) {
                    return res.status(401).json(
                        ResponseFormat.error('UK0', err.message, err)
                    );
                }
                const _admin = {
                    username: admin.username
                };

                const token = sign(_admin, process.env.JWT_SECRET);
                return res.status(200).json(
                    ResponseFormat.login_success({
                        jwt: token
                    })
                );
            });
        })(req, res);
});

router.post('/', async (req, res) => {
    try {
        let result = await AdminService.addNew(req.body);
        return ControllerResponse.postResponse(result);
    } catch (e) {
        console.trace(e)
        return ControllerResponse.internalServerError(e);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let res = await AdminService.getAdminById(req.params.id);
        return ControllerResponse.getResponse(res);
    } catch (error) {
        console.trace(error);
        return ControllerResponse.internalServerError(error);
    }
})

router.get('/:page/:limit', async (req, res) => {
    try {
        const payload = {
            page: req.params.page,
            limit: req.params.limit
        }
        let res = await AdminService.getAdminPagination(payload);
        return ControllerResponse.getResponse(res);
    } catch (error) {
        console.trace(error);
        return ControllerResponse.internalServerError(error)
    }
})

router.put('/update', async (req, res) => {
    try {
        const id = req.body.id;
        const payload = req.body;
        let res = await AdminService.updateAdmin(id, payload);
        return ControllerResponse.updateResponse(res);
    } catch (error) {
        console.trace(error);
        return ControllerResponse.internalServerError(error);
    }
})

router.put('/delete', async (req, res) => {
    try {
        const id = req.body.id;
        let res = await AdminService.deleteAdmin(id);
        return ControllerResponse.deleteResponse(res);
    } catch (error) {
        console.trace(error);
        return ControllerResponse.internalServerError(error);
    }
})

export default router;

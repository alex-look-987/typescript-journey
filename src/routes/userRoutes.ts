import { Router} from "express";
import { getUsers, getData } from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);
router.get('/users/data', getData);

export default router;

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
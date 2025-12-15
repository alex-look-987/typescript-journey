import { Router } from 'express';
import { getUsers, getData } from '../controllers/userController';

const router = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', getUsers);

/**
 * @openapi
 * /users/data:
 *   get:
 *     summary: Obtener data adicional de usuarios
 *     responses:
 *       200:
 *         description: Data de usuarios
 */
router.get('/data', getData);

export default router;

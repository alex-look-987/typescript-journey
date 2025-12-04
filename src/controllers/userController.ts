import { Request, Response } from "express";
import {getAllUsers} from "../services/userServices";

export const getUsers = (req: Request, res: Response) => {
    const users = getAllUsers();
    res.json(users);
};
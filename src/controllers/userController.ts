import { Request, Response } from "express";
import {getAllUsers, getAllData} from "../services/userServices";

export const getUsers = (req: Request, res: Response) => {
    const users = getAllUsers();
    res.json(users);
};

export const getData = (req: Request, res: Response) => {
    const data = getAllData();
    res.json(data);
};
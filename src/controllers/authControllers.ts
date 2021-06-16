import { Request, Response, NextFunction } from "express";
import config from '../config'

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const error: any = new Error("Error");
        error.statusCode = config.STATUS_CODE_ERROR;
        throw error;

        return res.status(config.STATUS_CODE).json({
            items: "ssss",
            status_code: 200,
        });
    } catch (error) {
        next(error);
    }
};

export default {
    login
}
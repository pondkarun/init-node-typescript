import { Request, Response, NextFunction } from "express";
import config from '../config'
import { sequelize } from '../models'
import { initModels, jobs } from "../models/init-models";

// import models into sequelize instance
initModels(sequelize);

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // const error: any = new Error("Error");
        // error.statusCode = config.STATUS_CODE_ERROR;
        // throw error;

        /* Query Model */
        const items = await jobs.findAll()

        /* Query String */
        const items2 = await sequelize.query("SELECT * FROM jobs")

        return res.status(config.STATUS_CODE).json({
            items,
            items2,
            status_code: 200,
        });
    } catch (error) {
        next(error);
    }
};

export default {
    login
}
import { Request, Response, NextFunction } from "express";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // const error: any = new Error("Error");
        // error.statusCode = 402;
        // throw error;

        return res.status(200).json({
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
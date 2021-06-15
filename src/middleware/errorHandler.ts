import { Request, Response, NextFunction } from "express";

interface Error {
    statusCode: number,
    message: any,
    validation: any,
}

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: {
            status_code: statusCode,
            message: err.message,
            validation: err.validation,
        },
    });

}
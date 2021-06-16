import { Request, Response, NextFunction } from "express";
import config from '../config'
import { sequelize } from '../models'
import { Model, DataTypes } from 'sequelize';

interface UserInstance extends Model {
    id: string;
    code: string;
    job_name?: string;
    is_use?: boolean;
    created_date: Date;
    updated_date?: Date;
    password?: string;
}

const jobs = sequelize.define<UserInstance>("job", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: "รหัสงาน"
    },
    job_name: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ชื่องาน"
    },
    is_use: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    created_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "สร้างข้อมูลเมื่อ"
    },
    updated_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "ปรับปรุงข้อมูลเมื่อ"
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "รหัสผ่าน"
    }
}, {
    tableName: 'jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
        {
            name: "jobs_pkey",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // const error: any = new Error("Error");
        // error.statusCode = config.STATUS_CODE_ERROR;
        // throw error;

        const job = await jobs.findAll();

        return res.status(config.STATUS_CODE).json({
            items: job,
            status_code: 200,
        });
    } catch (error) {
        next(error);
    }
};

export default {
    login
}
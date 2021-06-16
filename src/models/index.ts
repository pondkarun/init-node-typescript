import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(`postgres://hrSystemAdmin:4Dm!n2020@Interset@103.253.72.178:5432/defect_log_db`);
export { Sequelize, sequelize };
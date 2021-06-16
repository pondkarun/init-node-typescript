import fs from 'fs'
import path from 'path'
import { Sequelize } from 'sequelize'
import ENV from '../config'
import config from '../config/config'

const basename = path.basename(__filename);
const env = ENV.NODE_ENV;

const db: any = {};

let database: any;
let username: any;
let password: any;

if (env == "development") {
  database = config.development.database
  username = config.development.username
  password = config.development.password
} else if (env == "test") {
  database = config.test.database
  username = config.test.username
  password = config.test.password
} else if (env == "production") {
  database = config.production.database
  username = config.production.username
  password = config.production.password
}

const sequelize: any = new Sequelize(database, username, password);

fs.readdirSync(__dirname).filter(file => {

  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');

}).forEach(file => {

  const model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;

});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

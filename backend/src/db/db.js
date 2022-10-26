import  Sequelize  from "sequelize"
import dotenv from 'dotenv/config'
import { database, username, password, host, dialect} from '../helpers/helper.js'


export const db = new Sequelize(process.env.NODE_ENV_DATABASE_NAME, "postgres", "#37qD%pqRLyLP4foN9e0oP2z", {
    host:'database-1.caidmnar18ph.us-east-1.rds.amazonaws.com',
    dialect:'postgres',
  })





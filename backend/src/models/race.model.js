import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import {Species} from "./species.model.js"
const { STRING, INTEGER } = DataTypes

export const Race = db.define('race',{
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{ 
        type: STRING
    }
   
    })


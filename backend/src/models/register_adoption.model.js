import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, BOOLEAN, INTEGER } = DataTypes

        export const AdoptingRegister = db.define('register',{
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        city:{
            type: STRING,
            
        },
        date:{ 
            type: STRING
        }
        })

         
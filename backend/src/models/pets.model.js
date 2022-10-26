import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, BOOLEAN, INTEGER } = DataTypes

        export const Pets = db.define('pets',{
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: STRING,
            
        },
        age :{
            type:STRING,
        },
        img: {
            type:STRING,
        },
        status: {
            type:BOOLEAN,
            allowNull: false
        },
    
        })

         
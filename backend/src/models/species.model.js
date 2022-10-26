import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";


const { STRING, INTEGER } = DataTypes


         export const Species= db.define('species',{
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: STRING,
        },



        })




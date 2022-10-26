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
    },
    species_id: { 
        type: INTEGER,
        allowNull: false,
        references: {
            model: 'species', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
         },
         },
   
    })

 Race.hasOne(Species,{allowNull: false})
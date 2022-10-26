import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes


export const RefugeToPerson = db.define('refuge_person',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        petname:{
            type: STRING,
        },
        date: {
            type: STRING
        },
        owner_name:{
            type: STRING
        },
        identity_card:{ 
            type: STRING
        },
        phone:{ 
            type: INTEGER
        },
        address:{ 
            type: STRING
        },
        occupation:{ 
            type: STRING
        }
        })


        
import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes

export const PersonToRefuge = db.define('refuge_person',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pet_name:{
            type: STRING,
            allowNull: false
        },
        date: {
            type: STRING,
            allowNull: false
        },
        owner_name:{
            type: STRING,
            allowNull: false
        },
        cc:{ 
            type: STRING,
            allowNull: false
        },
        email:{
            type: STRING,
            allowNull: false
        },
        phone:{ 
            type: STRING,
            allowNull: false
        },
        address:{ 
            type: STRING,
            allowNull: false
        },
        occupation:{ 
            type: STRING,
            allowNull: false
        }
        })


        
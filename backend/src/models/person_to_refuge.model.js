import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes

export const PersonToRefuge = db.define('refuge_person',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        petname:{
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
        identity_card:{ 
            type: STRING,
            allowNull: false
        },
        phone:{ 
            type: INTEGER,
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


        
import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, BOOLEAN, INTEGER } = DataTypes

        export const Adopter = db.define('adopting',{
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: STRING,
            
        },
        lastname:{ 
            type: STRING
        },
        identity_card:{ 
            type: INTEGER
        },
        phone:{ 
            type: INTEGER
        },
        email:{ 
            type: STRING
        },
        address:{ 
            type: STRING
        },
        occupation:{ 
            type: STRING
        }
        })

         
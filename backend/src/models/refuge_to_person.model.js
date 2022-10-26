import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING,INTEGER } = DataTypes

export const RefugeToPerson = db.define('person_refuge',{
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,    
        },
        name:{
            type: STRING,
            allowNull: false
        },
        petname:{ 
            type: STRING,
            allowNull: false
        },
        description: {
            type: STRING,
            allowNull: false
        }, gender: {
            type: STRING,
            allowNull: false
        },
        breed: {
            type: STRING,
            allowNull: false
        },specie: {
            type: STRING,
            allowNull: false
        },
        vaccine: {
            type: STRING,
            allowNull: false
        },
        identity_card:{ 
            type: INTEGER,
            allowNull: false,
        },
        phone:{ 
            type: INTEGER,
            allowNull: false
        },
        email:{ 
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
        },
        status: {
            type:STRING,
            defaultValue: 'disponible',
            allowNull: false
        }
        })

         



        


        
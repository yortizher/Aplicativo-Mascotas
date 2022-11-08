import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING,INTEGER } = DataTypes

export const RefugeToPerson = db.define('person_refuge',{
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,    
        },
        owner_name:{
            type: STRING
        },
        pet_name:{
            type: STRING
        },
        pet_age:{
            type: STRING
        },
        pet_url:{
            type: STRING
        },
        description: {
            type: STRING
        }, gender: {
            type: STRING
        },
        breed: {
            type: STRING
        },specie: {
            type: STRING
        },
        vaccine: {
            type: STRING
        },
        cc:{ 
            type: STRING,
        },
        phone:{ 
            type: STRING
        },
        email:{ 
            type: STRING
        },
        address:{ 
            type: STRING
        },
        occupation:{ 
            type: STRING
        },
        status: {
            type:STRING,
            defaultValue: 'disponible'
        }
        })

         



        


        
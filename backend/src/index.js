import app from './app.js'
import { db } from './db/db.js'
import dotenv from 'dotenv/config'

const PORT = process.env.PORT || 6000

async function dbConnection()  {
    try{
        await db.authenticate()
        await db.sync({force:false})
        console.log('Connection has been established successfully.')
        app.listen(5000) 
        console.log(`Running on http://localhost:5000`)
    } catch (error) {
        console.error('Unable to connect to the database:', error)
      }
}
dbConnection()

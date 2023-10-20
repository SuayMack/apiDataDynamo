import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import cors from "cors"

import contratoRoute from './src/routes/contrato.route.js'
import clienteRoute from './src/routes/cliente.route.js'

config()

const app = express();

app.use(express.json())
app.use(cors("*"))

const port = process.env.PORT || 3000
const USER_DB = process.env.USER_DB || "local"
const DATABASE = process.env.DATABASE || "local"
const PASSWORD = process.env.PASSWORD || "local"
const CLUSTER = process.env.CLUSTER || "local"

mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD}@${CLUSTER}.${DATABASE}.mongodb.net/`)
.then(()=>{
  app.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀✈️`)
  });
})
.catch((e)=>console.log(e.message))

app.use('/contrato', contratoRoute)
app.use('/cliente', clienteRoute)

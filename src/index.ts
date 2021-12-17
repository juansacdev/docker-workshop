import { config } from 'dotenv'
import express, { Application } from 'express'
import { MongoClient } from 'mongodb'

const app: Application = express()
config()

const mongoURI = process.env.MONGO_URI ?? ''

app.get('/', (_req, res) => {
  MongoClient.connect(mongoURI, (err, db) => {
    if (err) {
      res.status(500).send('💥  BOOM: No se conecto la db 💥')
    } else {
      res.send('Me conecté a la db! 😎')
      // @ts-ignore
      db.close()
    }
  })
})

app.listen(3000, () => console.log("I'm alive on localhost:3000"))
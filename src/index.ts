import { config } from 'dotenv'
import express, { Application, Request, Response } from 'express'
import { MongoClient } from 'mongodb'

const app: Application = express()
config()

const mongoURI = process.env.MONGO_URI ?? ''

app.get('/', (_req: Request, res: Response) => {
  MongoClient.connect(mongoURI, (err, db) => {
    if (err) {
      res.status(500).send('💥  Nope: No se conecto la db 💥')
    } else {
      res.send('Hello world!!! me conecte a la db con Docker 🐳')
      db && db.close()
    }
  })
})

app.listen(3000, () => console.log("I'm alive on localhost:3000"))
import express, { Application, Request, Response } from 'express';

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello world and GDSC!!! 🚀')
})

app.listen(3000, () => console.log("I'm alive on localhost:3000"))
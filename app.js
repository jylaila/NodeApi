const express = require('express')
const app = express()
const port = 3000

let items = []

app.use(express.json())

app.get('/', (req, res) => {
  res.json(items)
})

app.post('/', (req, res) => {
    items.push(req.body.name)
    res.send(`Post ${req.body.name}`)
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


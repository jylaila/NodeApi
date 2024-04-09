const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/tempConvert', (req, res) => {
  let result = TemperatureConverter(req.body.temperature, req.body.type);
  res.send(`Temperature: ${result}`)
})

app.post('/students', (req, res) => {
  res.send(Students(req.query.total, req.body.grades))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function TemperatureConverter(temp, type) {
  let result = 0;
  switch (type.toUpperCase()) {
    case "C":
      result = 5 * (temp - 32) / 9;
      break;
    case "F":
      result = (9 * temp / 5) + 32;
      break;
  }
  return result;
}

function Students(total, grades) {
  if (total == grades.length) {
    let sum = grades.reduce((acum, x) => acum + x, 0)
    let average = sum / total
    let downAverage = grades.filter(x => x < 6);
    let onAverage = grades.filter(x => x >= 6);
    console.log(total)
    console.log(grades.length)

    return `Average: ${average} \n Down Average: ${downAverage.length} \n On Average: ${onAverage.length}  `
  }
  return "total value does not match total grades";
}
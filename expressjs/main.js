const express = require('express')
const app = express()
const port = 3033

app.get('/api/hello', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

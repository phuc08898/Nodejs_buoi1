const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    return res.send('hello world');
})
app.listen(port, () => {
   return console.log(`Example app listening at http://localhost:${port}`)
})
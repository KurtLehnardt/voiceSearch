const express = require('express')
const app = express()
const PORT = 3000 // || process.env.PORT

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname})
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})
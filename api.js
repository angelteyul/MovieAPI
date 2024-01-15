// creating the server

const express = require('express')
const app = express()
const PORT = 3000


// open server to listen to requests and show a message to confirm it's running

app.listen(PORT, () => console.info(`Server listening on port: ${PORT}`))

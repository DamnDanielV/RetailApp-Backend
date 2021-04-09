const express = require('express')
const bodyParser = require('body-parser')
const db = require('../config/db.config')
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//env config

require('../config/env.config')
const syncDb = async () => {
    await db.sync()

}

syncDb()

console.log(process.env.USER_DB)
app.use(bodyParser.json())
// rutas
app.use(require('./routes/index.routes'))



const port = process.env.PORT;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
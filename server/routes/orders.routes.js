const express = require('express')

const app = express()

app.get('/orders/',(req,res) => {
    const { orderId, startDate, finishDate } = req.query
    if(orderId) {
        console.log(orderId.split(','))
    }
    console.log(req.query)
    res.json({
        orderId,
        startDate,
        finishDate
    })
})

app.get('/orders/shipping/', (req, res) => {
    const {city, state, country} = req.query
    console.log(city)
    res.json({
        city,
        state,
        country
    })
})

app.use('/orders/:userId', (req, res) => {
    const { userId } = req.params
    res.json({
        userId
    })
})
module.exports = app;
const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { signJwt, verifyJwt, verifyToken } = require('../../utils/verifyToken');

const app = express()

app.get('/users/all', verifyJwt, async (req, res) => {
    verifyToken(req.token, res)
    const users = await User.findAll()
    res.json({
        users
    })
})

app.get('/users/:userId', async(req, res) => {
    const { userId } = req.params
    const user = await User.findByPk(userId) 
    res.json(
        user
    )
})

app.post('/register', async (req, res) => {
    const { name, lastname, govId, email, company, password } = req.body
    await bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            console.log(err)
        }
        try {
            await User.create({
                name,
                lastname,
                govId,
                email,
                company,
                password: hash
            })
         
            res.status(201).json({
                name,
                lastname,
                govId,
                email,
                company,
            })
            
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error
            })
        }
    })
    
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: {email} })
    if (!user) {
        res.send("user not exists")
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        res.json("wrong password")
    }
    else {
        res.json({
            email,
            token: signJwt(email)

        })
       
    }

})


module.exports = app;
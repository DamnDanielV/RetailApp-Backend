const jwt = require('jsonwebtoken')

let verifyJwt = (req, res, next) => {
    const bearerHeader = req.headers['authorization']

    if (bearerHeader) {
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}
const signJwt = (email) => {
    return jwt.sign({ email }, process.env.SEED, { expiresIn: "1d" })
}
const verifyToken = (token, res) => {
    return jwt.verify(token, process.env.SEED, (error, userData) => {
        if (error) {
            res.sendStatus(403)
        }
    })
}

module.exports = {
    verifyJwt,
    signJwt,
    verifyToken
}
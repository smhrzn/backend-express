const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    const bearerToken = authHeader && authHeader.startWith('Bearer')
        ? authHeader.slice(7)
        : null
    const token = req.cookies.token || bearerToken

    if(!token){
        return res.status(401).json({
            message: 'Authenticationn token is required'
        })
    }

    try{
        req.auth = jwt.verify(token, process.env.JWT_SECRET)
        next()
    }catch(error){
        return res.status(401).json({
            message:'Invalid or expired authentication token'
        })
    }
}

module.exports = authenticateToken;
const jwt = require("jsonwebtoken")
const path=require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

function verifyToken(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token, process.env.JWT_SECRETKEY, function(err, user) {
            if(err) return reject(err);

            return resolve(user)
        })
    })
}

async function authenticate (req, res, next) {
    const bearerToken = req.headers.authorization;
    if (! bearerToken || ! bearerToken.startsWith('Bearer ')) return res.status(400).send({message: "Please provide a bearer token"});

    const token = bearerToken.split(" ")[1]

    try {
        const {user} = await verifyToken(token)
        
        req.user = user;
    
        return next();
    } catch(err) {
        console.log("err:29",err);
    }
}

module.exports = authenticate;
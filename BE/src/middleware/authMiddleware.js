const jwt = require('jsonwebtoken')
require('dotenv').config();
const authMiddleWare = (req,res,next) => {
    console.log('checkToken',req.headers.token);
    const token = req.headers.token?.split(' ')[1]
    jwt.verify(token,process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
        const {payload} = user
        console.log('user',user)

        if(payload?.isAdmin) {
            console.log('true')
            next();
        }
        else {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
      });
}
const authUserMiddleWare = (req,res,next) => {
    const token = req.headers.token?.split(' ')[1]
    const userId = req.params.id
    jwt.verify(token,process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
        const {payload} = user
        console.log('user',user)

        if(payload?.isAdmin || payload?.id === userId) {
            console.log('true')
            next();
        }
        else {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
      });
}



module.exports = {
    authMiddleWare,
    authUserMiddleWare
}
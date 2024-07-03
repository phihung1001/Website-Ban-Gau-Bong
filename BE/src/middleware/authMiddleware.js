const jwt = require('jsonwebtoken')
require('dotenv').config();
const authMiddleWare = (req,res,next) => {
    console.log('checkToken',req.headers.token);
    console.log('req.header', req.headers);
    const token = req.headers.token?.split(' ')[1]

    // dùng access_token để check người dùng 
    jwt.verify(token,process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(404).json({
                message: 'The authentication 1s',
                status: 'ERROR'
            })
        }
        console.log('user',user)

        if(user?.isAdmin) {
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
    //console.log('req.header', req.headers);
    const token = req.headers.token?.split(' ')[1]
    const userId = req.params.id
    jwt.verify(token,process.env.ACCESS_TOKEN, function(err, user) {
        if(err) {
            return res.status(404).json({
                message: 'The authentication',
                status: 'ERROR'
            })
        }
        console.log('user',user)

        if(user?.isAdmin || user?.id === userId) {
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
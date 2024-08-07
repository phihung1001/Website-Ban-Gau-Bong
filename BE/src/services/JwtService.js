//Xử lí liên quan đến API

const jwt = require('jsonwebtoken')
require('dotenv').config();

const genneralAccessToken = async (payload) => {
    const access_token = jwt.sign({
        ...payload
    },process.env.ACCESS_TOKEN,{expiresIn :'360s'})
    return access_token
}

const genneralRefreshToken = async (payload) => {
    const refresh_token = jwt.sign({
        ...payload
    },process.env.REFRESH_TOKEN,{expiresIn :'365d'})
    return refresh_token
}

const refreshTokenJwtService = async (token) => {
    return new Promise( async (resolve, reject) => {
    try {
        console.log('token',token)
        jwt.verify(token,process.env.REFRESH_TOKEN, async(err,user) => {
            if(err) {
                console.log('error',err)
                resolve({
                    status: "ERR",
                    message: "The authenication"
                })
            }
            
            const access_token = await genneralAccessToken({
                id: user?.id,
                isAdmin: user?.isAdmin
            })
            console.log('access_token',access_token)
            resolve({
                status : 'OK',
                message :'SUCCESS',
                data: access_token
            })
        })
    }
    catch(e){
        reject(e)
    }
})
}

module.exports = {
    genneralAccessToken, genneralRefreshToken,refreshTokenJwtService
}


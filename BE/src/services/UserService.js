//Xử lí liên quan đến API

const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService")

const createUser = (newUser) => {
      return new Promise( async (resolve, reject) => {
        const { name,email,password, confirmPassword} = newUser
        try {
           // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu chưa
            const checkUser = await User.findOne({
                 email: email
            })
            if(checkUser !==null) {
              resolve({
                status :'ERR',
                message: 'Email đã tồn tại trong hệ thống. Vui lòng nhập lại'
              })
            }
                 // Mã hóa mật khẩu bằng bcrypt
            const hash = bcrypt.hashSync(password,10)
            console.log('hash', hash)
             // Tạo người dùng mới trong cơ sở dữ liệu
            const createdUser = await User.create({
              name,
              email,
              password : hash,
            })
  // Nếu tạo người dùng thành công, trả về phản hồi thành công
            if(createdUser) {
              resolve({
                  status : 'OK',
                  message :'Đăng kí thành công',
                  data : createdUser
              })
            }
        }
        catch(e){
           // Nếu có lỗi, reject promise và trả về lỗi
            reject(e)
        }
      })
}
const loginUser = (userLogin) => {
  return new Promise( async (resolve, reject) => {
    const { name ,password } = userLogin
    try {
        const checkUser = await User.findOne({
             name: name
        })
        if(checkUser === null) {
          resolve({
            status :'ERR',
            message: 'Tên tài khoản bạn nhập không đúng. Vui lòng nhập lại'
          })
        }
        const comparePassword = bcrypt.compareSync(password,checkUser.password)
        //console.log('comparePassword',comparePassword);
        if(!comparePassword){
          resolve({
               status: 'ERR',
               message: 'Bạn đã nhập sai mật khẩu. Vui lòng nhập lại'
          })
        }

        const access_token = await genneralAccessToken({
              id: checkUser.id,
              isAdmin : checkUser.isAdmin
        })
        const refresh_token = await genneralRefreshToken({
              id: checkUser.id,
              isAdmin : checkUser.isAdmin
        })

        resolve({
              status : 'OK',
              message :'Đăng nhập thành công. Vui lòng chờ chuyển hướng',
              access_token,
              refresh_token
        })
    }
    catch(e){
        reject(e)
    }
  })
}
const updateUser = (id,data) => {
  return new Promise( async (resolve, reject) => {
    try {
        const checkUser = await User.findOne({
          _id: id
        })
        console.log('checkUser', checkUser)
        if(checkUser === null) {
          resolve({
            status:"OK",
            message:"The user is not defined"
          })
        }
        const updatedUser = await User.findByIdAndUpdate(id,data, {new : true}) 
        console.log('updatedUser',updatedUser)
        resolve({
              status : 'OK',
              message :'SUCCESS',
              data: updatedUser
        })
    }
    catch(e){
        reject(e)
    }
  })
}
const deleteUser = (id) => {
  return new Promise( async (resolve, reject) => {
    try {
        const checkUser = await User.findOne({
          _id: id
        })
        console.log('checkUser', checkUser)
        if(checkUser === null) {
          resolve({
            status:"OK",
            message:"The user is not defined"
          })
        }
        await User.findByIdAndDelete(id) 
        resolve({
              status : 'OK',
              message :'Delete user SUCCESS',
        })
    }
    catch(e){
        reject(e)
    }
  })
}

const getAllUser = () => {
  return new Promise( async (resolve, reject) => {
    try {
        const allUser = await User.find() 
        resolve({
              status : 'OK',
              message :'Data user SUCCESS',
              data : allUser
        })
    }
    catch(e){
        reject(e)
    }
  })
}
const getDetailsUser = (id) => {
  return new Promise(async (resolve, reject) => {
      try {
          const user = await User.findOne({
              _id: id
          })
          if (user === null) {
              resolve({
                  status: 'ERR',
                  message: 'The user is not defined'
              })
          }
          resolve({
              status: 'OK',
              message: 'SUCESS',
              data: user
          })
      } catch (e) {
          reject(e)
      }
  })
}

module.exports = {
  createUser,loginUser,updateUser,deleteUser,getAllUser,getDetailsUser
}
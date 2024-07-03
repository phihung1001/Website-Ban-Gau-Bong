const UserService = require('../services/UserService')
const JwtService = require('../services/JwtService')


const createUser = async(req, res) => {
    try {
                // Lấy dữ liệu từ yêu cầu
        const { name,email,password, confirmPassword} = req.body
         // Kiểm tra định dạng email
         console.log('req.body',req.body);
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const isCheckEmail = reg.test(email);
         // Kiểm tra xem các trường có đầy đủ hay không
        if(!name || !email || !password || !confirmPassword)  {
            return res.status(200).json({
                status : "ERR",
                message : 'Bạn phải nhập đầy đủ thông tin'
            })
        }  
        // Kiểm tra định dạng email hợp lệ
        else if(!isCheckEmail) {
            return res.status(200).json({
                status : "ERR",
                message : 'Bạn phải nhập đúng email'
            })
        } // Kiểm tra xem password và confirmPassword có giống nhau không
        else if(password !==confirmPassword) {
            return res.status(200).json({
                status : "ERR",
                message : 'Mật khẩu nhập lại không đúng. Vui lòng nhập lại'
            })
        }
        console.log(req.body);// In dữ liệu ra console để kiểm tra
        const response = await UserService.createUser(req.body);  // Gọi UserService để tạo người dùng mới
        return res.status(200).json(response)  // Trả về phản hồi từ UserService
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}
const loginUser = async(req, res) => {
    try {
        const { name, password } = req.body
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        // const isCheckUser = reg.test(email);
        if(!name || !password)  {
            return res.status(200).json({
                status : "ERR",
                message : 'Bạn phải nhập đầy đủ thông tin'
            })
        } 
        // else if(!isCheckEmail) {
        //     return res.status(200).json({
        //         status : "ERROR",
        //         message : ' The input is email'
        //     })
        // } else if(password !==confirmPassword) {
        //     return res.status(200).json({
        //         status : "ERROR",
        //         message : ' The password is equal confirmPassword'
        //     })
        // }
        console.log(req.body);

        const response = await UserService.loginUser(req.body);
        // console.log('response', response)
        const{ refresh_token, ...Newresponse} = response

        //samesite cookie
        res.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            Secure: false,
            samesite: 'strict'
        })
        return res.status(200).json(Newresponse)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateUser = async(req, res) => {
    try {
        const userId = req.params.id
        const data = req.body
        console.log('data',data)
        if(!userId) {
            return res.status(200).json({
                status: "ERR",
                message: "Id người dùng là bắt buộc"
            })
        }
        console.log('userId',userId);
        const response = await UserService.updateUser(userId,data);
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}
const deleteUser = async(req, res) => {
    try {
        const userId = req.params.id
        if(!userId) {
            return res.status(200).json({
                status: "ERR",
                message: "Id người dùng là bắt buộc"
            })
        }
        const response = await UserService.deleteUser(userId);
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllUser = async(req, res) => {
    try {
        const response = await UserService.getAllUser();
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getDetailsUser = async(req, res) => {
    try {
        const userId = req.params.id
        if(!userId) {
            return res.status(200).json({
                status: "ERR",
                message: "Id người dùng là bắt buộc"
            })
        }
        const response = await UserService.getDetailsUser(userId);
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const refreshToken = async(req, res) => {
    console.log('req.cookies.refresh_token', req.cookies.refresh_token)
    try {
        const token = req.cookies.refresh_token
        if(!token) {
            return res.status(200).json({
                status: "ERR",
                message: "The token is required"
            })
        }
        const response = await JwtService.refreshTokenJwtService(token);
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}


const logoutUser = async(req, res) => {
    try {
        res.clearCookie('refresh_token')
        return res.status(200).json({
            status: 'Ok',
            message:" Đăng xuất thành công"
        })
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}


module.exports = {
    createUser,loginUser,updateUser,deleteUser,getAllUser,getDetailsUser,
    refreshToken, logoutUser
}
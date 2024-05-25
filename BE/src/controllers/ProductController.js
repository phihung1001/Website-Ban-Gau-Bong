const ProductService = require('../services/ProductService')
const JwtService = require('../services/JwtService')


const createProduct = async(req, res) => {
    try {
        const { name,image,type, price, size } = req.body
        
        if(!name || !image || !type || !price || !size)  {
            return res.status(200).json({
                status : "ERROR",
                message : ' The Input Is Require'
            })
        } 
        console.log("req.body",req.body)
        const response = await ProductService.createProduct(req.body);
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateProduct = async(req, res) => {
    try {
        const productId = req.params.id
        const data = req.body
        console.log('data',data)
        if(!productId) {
            return res.status(200).json({
                status: "ERROR",
                message: "The userId is required"
            })
        }
        console.log('productId',productId);
        const response = await ProductService.updateProduct(productId,data);
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsProduct = async(req, res) => {
    try {
        const productId = req.params.id
        if(!productId) {
            return res.status(200).json({
                status: "ERROR",
                message: "The productId is required"
            })
        }
        const response = await ProductService.getDetailsProduct(productId);
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteProduct = async(req, res) => {
    try {
        const productId = req.params.id
        if(!productId) {
            return res.status(200).json({
                status: "ERROR",
                message: "The productId is required"
            })
        }
        const response = await ProductService.deleteProduct(productId);
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getallProduct = async(req, res) => {
    try {
        const { limit, page ,sort, filter } = req.query
        const response = await ProductService.getallProduct(Number(limit) || 8 , Number(page) || 0, sort, filter);
        return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getallProduct
}
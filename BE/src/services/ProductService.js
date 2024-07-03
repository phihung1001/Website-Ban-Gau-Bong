//Xử lí liên quan đến API

const Product = require("../models/ProductModel")
const bcrypt = require("bcrypt")

const createProduct = (newProduct) => {
      return new Promise( async (resolve, reject) => {
        const { name,image,type, price, size } = newProduct
        try {
            const checkProduct = await Product.findOne({
                name: name
            })
            if(checkProduct !==null) {
              resolve({
                status :'Ok',
                message: 'The name of product is already'
              })
            }
            const createdProduct = await Product.create({
                name,image,type, price, size
            })

            if(createdProduct) {
              resolve({
                  status : 'OK',
                  message :'SUCCESS',
                  data : createdProduct
              })
            }
        }
        catch(e){
            reject(e)
        }
      })
}

const updateProduct = (id,data) => {
    return new Promise( async (resolve, reject) => {
      try {
          const checkProduct = await Product.findOne({
            _id: id
          })
          console.log('checkProduct', checkProduct)
          if(checkProduct === null) {
            resolve({
              status:"OK",
              message:"The user is not defined"
            })
          }
          const updatedProduct = await Product.findByIdAndUpdate(id,data, {new : true}) 
          console.log('updatedProduct',updatedProduct)
          resolve({
                status : 'OK',
                message :'SUCCESS',
                data: updatedProduct
          })
      }
      catch(e){
          reject(e)
      }
    })
}

const getDetailsProduct = (id) => {
  return new Promise( async (resolve, reject) => {
    try {
        const product = await Product.findOne({
          _id: id
        })
        console.log('product', product)
        if(product === null) {
          resolve({
            status:"OK",
            message:"The product is not defined" 
          })
        }
        await Product.findByIdAndDelete(id) 
        resolve({
              status : 'OK',
              message :'SUCCESS',
              data: product
        })
    }
    catch(e){
        reject(e)
    }
  })
}

const deleteProduct = (id) => {
    return new Promise( async (resolve, reject) => {
      try {
          const checkProduct = await Product.findOne({
            _id: id
          })
          console.log('checkProduct', checkProduct)
          if(checkProduct === null) {
            resolve({
              status:"OK",
              message:"The product is not defined"
            })
          }
          await Product.findByIdAndDelete(id) 
          resolve({
                status : 'OK',
                message :'Delete Product SUCCESS',
          })
      }
      catch(e){
          reject(e)
      }
    })
  }
  
  const getallProduct = (limit, page,sort,filter) => {
    return new Promise( async (resolve, reject) => {
      try {
          const totalProduct = await Product.countDocuments()
          if(filter) {
            console.log('ok obj')

            const label = filter[0];

            const allObjectFilter = await Product.find({ [label]: {'$regex' : filter[1]} }).limit(limit).skip(page * limit)
            console.log(allObjectFilter)
            resolve({
              status : 'OK',
              message :'Data Object SUCCESS',
              data : allObjectFilter,
              total: totalProduct,
              pageCurrent: Number(page+1),
              totalPage : Math.ceil(totalProduct / limit )
            })
          }
          if(sort) {
            console.log('ok sort')
            const objectSort = {}
            objectSort[sort[1]] = sort[0]
            console.log('objectSort',objectSort)
            const allProductSort = await Product.find().limit(limit).skip(page*limit).sort(objectSort)
            resolve({
              status : 'OK',
              message :'Data Product SUCCESS',
              data : allProductSort,
              total: totalProduct,
              pageCurrent: Number(page+1),
              totalPage : Math.ceil(totalProduct / limit )
            })
          }
          const allProduct = await Product.find().limit(limit).skip(page*limit).sort()

          resolve({
                status : 'OK',
                message :'Data Product SUCCESS',
                data : allProduct,
                total: totalProduct,
                pageCurrent: Number(page+1),
                totalPage : Math.ceil(totalProduct / limit )
          })
      }
      catch(e){
          reject(e)
      }
    })
  }
module.exports = {
  createProduct,
  updateProduct,
  getDetailsProduct,
  deleteProduct,
  getallProduct
}
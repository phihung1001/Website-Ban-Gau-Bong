const mongoose = require("mongoose");

const oderSchema = new mongoose.Schema(
  {
    oderItems: [
        {
            name: {type: String, required: true },
            image: {type: String, required: true},
            type: {type: String, required: true},
            price: {type: Number, required: true},
            size:{type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
        },
    ],
    shippingAddress: [
        {
            fullName: { type: String, required: true},
            address: { type: String, required: true},
            city: { type: String, required: true },
            country: { type: String, required: true},
            phone: { type: Number, required: true},
        },
    ],
    Paymethod : { type: String, required: true},
    ItemsPrice : { type: String, required: true, unique: true}, 
    shippingPrice : { type: String, required: true },
    taxPrice : { type: Boolean, default: false, required: true},
    totalPrice : { type: Number, required: true},
    user : { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    isPaid : { type: Boolean, required: false},
    paidAt: { type: Date},
    isDelivered: { type: Boolean, default: false},
    deliveredAt: { type: Date},
  },
  {
    timestamps : true
  }
);

const Oder = new mongoose.model("Oder",userSchema);

module.exports = Oder;
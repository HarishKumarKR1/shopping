import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        red:'User'
    },
    orderItems:[
        {
            name:{type:String, required:true},
            qty:{type:Number, required:true},
            image:{type:String, required:true},
            price:{type:Number, required:true},
            product:{
                type:mongoose.Schema.Types.ObjectId, 
                required:true}
        }
    ],
    shippingAddress:{
        address:{type:String, required:true},
        city:{type:String, required:true},
        postalCode:{type:String, required:true},
        country:{type:String, required:true},
    },
    paymentMethod:{
        type:String,
        reguired:true
    },
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address:{type:String},
    },
    taxPrice:{
        type:Number,
        reguired:true,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        reguired:true,
        default:0.0
    },
    totalPrice:{
        type:Number,
        reguired:true,
        default:0.0
    },
    isPaid:{
        type:Boolean,
        reguired:true,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean,
        reguired:true,
        default:false
    },
    deliveredAt:{
        type:Date
    }

},{
    timestamps:true
})

const Order = mongoose.model('Order',orderSchema)

export default Order
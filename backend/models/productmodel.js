import mongoose from 'mongoose'

const reviewSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
},{
    timestamps:true,
})

const productSchema = mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },

    name:{
        type:String,
        reguired:true
    },
    image:{
        type:String,
        reguired:true,
    },
    brand:{
        type:String,
        reguired:true
    },
    category:{
        type:String,
        reguired:true
    },
    description:{
        type:String,
        reguired:true
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        reguired:true,
        default:0
    },
    numReviews:{
        type:Number,
        reguired:true,
        default:0
    },
    price:{
        type:Number,
        reguired:true,
        default:0
    },
    countInStock:{
        type:Number,
        reguired:true,
        default:0
    },

},{
    timestamps:true
})

const Product = mongoose.model('Product',productSchema)

export default Product
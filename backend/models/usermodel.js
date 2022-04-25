import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        reguired:true
    },
    email:{
        type:String,
        reguired:true,
        unique:true
    },
    password:{
        type:String,
        reguired:true
    },
    isAdmin:{
        type:Boolean,
        reguired:true,
        default:false
    }
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema)

export default User
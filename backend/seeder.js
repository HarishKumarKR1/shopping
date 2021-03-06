import  mongoose  from "mongoose";
import dotenv from 'dotenv'
import users from './data/user.js'
import products from './data/products.js'
import User from './models/usermodel.js'
import Product from './models/productmodel.js'
import Order from './models/ordermodel.js'
import connectDB from "./config/db.js"

dotenv.config();

connectDB()

const importData = async () =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers=await User.insertMany(users)
        const adminUser =createdUsers[0]._id
        const sampleProducts=(products.map((p)=>{
            return {...p, user:adminUser}
        }))
        await Product.insertMany(sampleProducts)
        console.log('Data Imported!')
        process.exit()
    }catch(e){
        console.log(`${e}`)
        process.exit(1)
    }
}
const destroyData = async () =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
      
        console.log('Data Destroyed!')
        process.exit()
    }catch(e){
        console.log(`${e}`)
        process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}
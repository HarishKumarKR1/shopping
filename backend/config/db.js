import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const connectDB = async ()=>{
    try{
        const conn= await mongoose.connect('mongodb+srv://Harish96:Harish9611@eshopping.on0vt.mongodb.net/EShopping?retryWrites=true&w=majority', {
            useUnifiedTopology:true,
            useNewUrlParser:true
    
        })

        console.log(`MongoDB Connected:${conn.connection.host}`)
    } catch(error){
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB
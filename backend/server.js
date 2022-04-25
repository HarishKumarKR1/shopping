import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
const app=express()

dotenv.config({path:'./.env'});

connectDB()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('API is running...')
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT=process.env.PORT || 3000
app.listen(PORT, console.log(`server running on Development mode in port ${PORT}`))


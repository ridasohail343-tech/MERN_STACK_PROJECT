import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import ProductRouter from './routes/productRoutes.js'
import CartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoute.js'


const app=express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())
app.use('/api/user',userRouter)
app.use('/api/product',ProductRouter)
app.use('/api/cart',CartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
res.send('api is working')
})

const startServer = async () => {
	await connectDB()
	app.listen(port,()=>console.log('server started on port',+port))
}

startServer().catch(() => process.exit(1))



import express from 'express'
import { PORT } from './config/config.js'
import { connectDB } from './config/db.js'
import productRouter from "./routes/productRoutes.js"
import categoryRouter from "./routes/categoryRoutes.js"
import sizeRouter from "./routes/sizeRoutes.js"
import colorRoutes from "./routes/colorRoutes.js"
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB()


app.use("/api/product", productRouter)
app.use("/api/category", categoryRouter)
app.use("/api/size", sizeRouter)
app.use("/api/color", colorRoutes)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


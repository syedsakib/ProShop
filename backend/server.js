const express = require('express');
const dotenv = require('dotenv');
//const products = require('./data/products');
const connectDB = require('./config/db');
const colors = require('colors');
const errorMiddleware=require('./middleWare/errorMiddleware')
const productsRoutes=require('./routes/productRoutes')
const userRoutes=require('./routes/userRoutes')

dotenv.config();
connectDB();

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products',productsRoutes)
app.use('/api/users',userRoutes)

app.use(errorMiddleware.notFound)
app.use(errorMiddleware.errorHandler)


const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port:${port}`.yellow.bold
  )
);

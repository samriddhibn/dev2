const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(
    // 'mongodb+srv://samriddhimishra:mongo@12!@cluster0.rizmgef.mongodb.net/?retryWrites=true&w=majority'
  'mongodb+srv://samriddhimishra:BH8Zjmlk0OW6LbpF@cluster0.rizmgef.mongodb.net/'
  // , {
  //   useUnifiedTopology: true,
  //   useNewUrlParser: true
  // }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


  // Import routes
   const productRoutes = require("./routes/product");

   // Middlewares
   app.use(express.json());

   // route Middlewares
   app.use("/api/products",productRoutes);


app.listen(3000, () => {console.log("server up and running on port 3000!")});

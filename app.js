const express = require("express");
const cors =require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

const userRoutes = require("./Routes/UserRoutes");
// const categoryRoutes = require("./Routes/CategoryRoutes")
// const productRoutes = require("./Routes/ProductRoutes")
// const fileUploadRoutes = require("./Routes/FileUploadRoutes")
const bookRoutes = require("./Routes/BookRoutes");



app.use('/user',userRoutes);
// app.use('/category',categoryRoutes);
// app.use('/product',productRoutes);
// app.use('/file',fileUploadRoutes);
app.use('/book',bookRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/cw1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("error..",err);
})




app.listen(PORT, () => {
  console.log("server started on port 3001");
});
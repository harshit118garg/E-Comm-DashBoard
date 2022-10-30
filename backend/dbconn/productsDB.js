const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`database connectivity established ${conn.connection.host}`);
    const productSchema = new mongoose.Schema({});
    const products = mongoose.model('products', productSchema);
    const data = await products.find();

    // console.log(data);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;

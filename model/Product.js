const mongoose = require ("mongoose");
const productSchema = new mongoose.Schema({
    checkInTime: String,
    checkOutTime: String
        //  image: String,
        //  details: String
});
module.exports = mongoose.model("Product",productSchema);
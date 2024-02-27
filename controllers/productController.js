const Product = require("../model/Product");

//Get All products
const product_all = async (req, res) => {
    try{
        const products = await Product.find();
            res.json(product);
            } catch (error){
                res.json({message: error });
            }
};

//Single product
const product_details = async (req, res) => {};

//Add New product
const product_create = async (req, res) => {
    const product = new Product({
        checkInTime: req.body.checkInTime,
        checkOutTime: req.body.checkOutTime,
        // image: req.body.image,
        // details: req.body.details
    });
    try{
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch(error) {
        res.status(400).send(error);
    }

};

//Update product
const product_update = async (req, res) => {};

//Delete product
const product_delete = async (req, res) => {};

module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete

}
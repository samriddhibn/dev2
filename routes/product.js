const router = require("express").Router();
const productController = require('../controllers/productController')

router.post("/",productController.product_create);
router.get("/",productController.product_all);
router.get("/:productId");
router.put("/:productId");
router.delete("/:productId");

module.exports = router;
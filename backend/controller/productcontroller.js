const Product = require("../models/startupModel")
const ErrorHander = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
 const ApiFeatures = require("../utils/apifeatures");

//    jo export krna hai use exports ke baad likh na hai

//   creating a product ---> ADMIN  
 exports.createProduct = catchAsyncError(async(req, res) => {

    console.log("insife create Product")
     const product = await Product.create(req.body);
        console.log("inside create prodduct")
     res.status(201).json({
         Status: true,
         product
     })
    })

 
// get all product list
exports.getAllProducts = catchAsyncError(async (req,res, next) =>{
     const resultPerPage = 10;
     console.log("yujit req gen")
      // const ProductCount = await Product.countDocuments(); 
    //  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    //  .search()
    //  .filter()
    //  .pagination(resultPerPage);
    const results=await Product.find({});
    console.log(results);
        // hr function mai query return krrahe hain 
    //  const products = await apiFeatures.query;
    //  console.log(products)
     res.setHeader('Access-Control-Allow-Origin','*');
     res.status(200).json({
       Status: true,
       results,
     });
    })
    
    
    
    // Get Product Details
    exports.getProductDetails = catchAsyncError(async (req, res, next) => {
      const product = await Product.findById(req.params.id);
      
      res.setHeader('Access-Control-Allow-Origin','*');
      if (!product) {
        return next(new ErrorHander("Product not found", 404));
 }

 res.status(200).json({
   success: true,
   product,
 });
});
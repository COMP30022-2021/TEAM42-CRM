const Product = require('../models/product')

exports.createNewProduct = async (req, res) => {
  try {
    let { name, unit_price } = req.body;
    let newProduct = new Product(name, unit_price);

    newProduct.save().then((product) => {
      res.status(200).json({
        status_code: 200,
        status_message: "Success",
        product: {
          name: newProduct.name,
          unit_price: newProduct.unit_price,
        }
      });
    });
  } catch (err) {
    console.log(err);
    if(err.code === 1062) {
      res.status(401).json({
        status_code: 401,
        status_message: "Error: Product Already Exists"
      })
    } else {
      res.status(400).json({
        status_code: 400,
        status_message: "Error: Internal Server Error"
      })
    }
  }
};

exports.findAll = async (req, res) => {
  try {
    let [products, _] = await Product.findAll();
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      products
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

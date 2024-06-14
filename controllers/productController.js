const Product = require('../models/produto');

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageurl = req.body.imageurl;
  const price = req.body.price;
  const description = req.body.description;

  Product.create({
    title: title,
    price: price,
    imageurl: imageurl,
    description: description
  })
  .then((resultado) => {
    console.log('Produto criado');
    res.status(200).json({produto: resultado})
  })
  .catch(err => {
    console.log(err);
  })
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((products) => {
    res.status(200).json({data: products});
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: 'erro interno'})
  });
};
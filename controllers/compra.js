const Product = require('../models/produto');
const cesta = require('../models/cesta');

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((produtos) => {
    res.status(200).json({data:produtos});
  }).catch(err => {
    res.status(500).json({ error: 'Internal server error' });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then(product => {
    res.status(200).json({data: product});
  }).catch(err => {
    res.status(500).json({ error: 'Internal server error' });
  });
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then((meusprodutos) => {
    res.status(200).json({data:meusprodutos });
  }).catch(err => {
    res.status(500).json({ error: 'Internal server error' });
  });
};

exports.getCesta = (req, res, next) => {
  req.user.getcesta()
  .then(cesta => {
    return cesta.getProdutos()
    .then((produtos) => {
      res.status(200).json({data: produtos})
    })
    .catch(erro => {
      res.status(500).json({ error: 'Não consegue obter produtos cesta' });
    });
  })
 .catch(erro => {
  res.status(500).json({ error: 'Não consegue obter cesta do user' });
 });
};

exports.postCesta = (req, res, next) => {
  const prodId = req.body.productId;
  let cestaActual;

  req.user
  .getcesta()
  .then(cesta => {
      cestaActual = cesta;
      return cesta.getProdutos({where : {id: prodId}});
  })
  .then(produtos => {
    let produto;
    if (produtos.length > 0) {
      produto = products[0];
    }
    let newQ = 1;
    if (produto) {
      //
    }
    return Product.findByPk(prodId)
    .then(produto => {
      return cestaActual.addProduto( produto, {
        through: {quantity: newQ}
      });
    })
    .catch(erro => {
      res.status(500).json({ error: 'Não consegue actualizar quantidade do produto' });
    });
  })
  .then(() => {
    res.status(200).json({data: cestaActual});
  })
  .catch(erro => {
    res.status(500).json({ error: 'Não consegue obter cesta do user' });
  });
 
};

exports.postCestaDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId, product => {
    cesta.deleteProduct(prodId, product.price);
    res.redirect('/cesta');
  });
};

exports.getOrders = (req, res, next) => {
  res.status(200).json({data: 'em implementação'});
};

exports.getCheckout = (req, res, next) => {
  res.status(200).json({data: 'em implementação'});
};

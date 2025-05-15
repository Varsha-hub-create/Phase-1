const Product = require('../models/Product');

// Get product statistics by category
exports.getProductStats = async (req, res) => {
  const stats = await Product.aggregate([
    {
      $group: {
        _id: "$category",
        totalProducts: { $sum: 1 },
        totalStock: { $sum: "$stock" },
        avgPrice: { $avg: "$price" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" }
      }
    }
  ]);
  res.json(stats);
};

// Complex filtering
exports.filterProducts = async (req, res) => {
  const { minPrice = 0, maxPrice = 10000, inStock = true } = req.query;
  const query = {
    price: { $gte: +minPrice, $lte: +maxPrice },
  };

  if (inStock === 'true') query.stock = { $gt: 0 };

  const products = await Product.find(query);
  res.json(products);
};

// Text search
exports.searchProducts = async (req, res) => {
  const { q } = req.query;
  const results = await Product.find({ $text: { $search: q } });
  res.json(results);
};

// Average prices by category
exports.getAveragePrices = async (req, res) => {
  const result = await Product.aggregate([
    { $group: {
        _id: "$category",
        avgPrice: { $avg: "$price" }
    }}
  ]);
  res.json(result);
};

// Sorting and advanced filtering
exports.getAllProducts = async (req, res) => {
  const { sortBy = 'price', order = 'asc', category, stockGt } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (stockGt) filter.stock = { $gt: +stockGt };

  const sortOrder = order === 'desc' ? -1 : 1;
  const products = await Product.find(filter).sort({ [sortBy]: sortOrder });
  res.json(products);
};

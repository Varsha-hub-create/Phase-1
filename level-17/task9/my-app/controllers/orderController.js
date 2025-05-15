const mongoose = require('mongoose');
const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');
const AppError = require('../utils/AppError');

exports.createOrder = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { userId, products } = req.body;
    let totalAmount = 0;

    for (const item of products) {
      const product = await Product.findById(item.product).session(session);
      if (!product) throw new AppError('Product not found', 404);
      if (product.stock < item.quantity) {
        throw new AppError(`Insufficient stock for ${product.name}`, 400);
      }
      totalAmount += product.price * item.quantity;
      product.stock -= item.quantity;
      await product.save({ session });
    }

    const order = await Order.create([{ user: userId, products, totalAmount }], { session });

    const user = await User.findById(userId).session(session);
    if (!user) throw new AppError('User not found', 404);

    user.purchaseHistory.push({ orderId: order[0]._id, date: new Date() });
    await user.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ success: true, order: order[0] });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

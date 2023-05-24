const asyncHandler = require('../middlewares/asyncHandler');
const Order = require('../models/Order');

// Function to calculate the commission
function calculateCommission(order) {
  if (!order.service || !order.service.price) {
    throw new Error('Invalid order structure. Missing service or price property.');
  }

  const commissionPercentage = 10;
  const commission = order.service.price * (commissionPercentage / 100);
  return commission;
}

// POST /orders
exports.createOrder = asyncHandler(async (req, res, next) => {
  const order = new Order(req.body);
  try {
    order.commission = calculateCommission(order);
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }

  await order.save();

  res.status(201).json({
    success: true,
    data: order
  });
});


// GET /orders
exports.getOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).json({
    success: true,
    data: orders
  });
});

// GET /orders/:id
exports.getOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: order
  });
});

// PUT /orders/:id
exports.updateOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: order
  });
});

// DELETE /orders/:id
exports.deleteOrder = asyncHandler(async (req, res, next) => {
  await Order.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {}
  });
});

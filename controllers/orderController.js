const asyncHandler = require('../middlewares/asyncHandler');
const Order = require('../models/Order');
const Service = require('../models/Service'); // Add this line to import the Service model


// Function to calculate the commission
async function calculateCommission(order) {
  const populatedOrder = await Order.findById(order._id).populate('service').exec();

  if (!populatedOrder.service || !populatedOrder.service.price) {
    throw new Error('Invalid order structure. Missing service or price property.');
  }

  const commissionPercentage = 10;
  const commission = populatedOrder.service.price * (commissionPercentage / 100);
  return commission;
}




// POST /orders
exports.createOrder = asyncHandler(async (req, res, next) => {
  const { service: serviceId, customer: customerId, coach: coachId } = req.body;

  try {
    const service = await Service.findById(serviceId).select('price');

    if (!service) {
      return res.status(400).json({
        success: false,
        error: 'Service not found'
      });
    }

    const commissionPercentage = 10;
    const commission = service.price * (commissionPercentage / 100);

    const order = new Order({
      service: serviceId,
      customer: customerId,
      coach: coachId,
      commission: commission,
      price: service.price
    });

    await order.save();

    res.status(201).json({
      success: true,
      data: order
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
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

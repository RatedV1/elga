const Review = require('../models/Review');
const Order = require('../models/Order');
const User = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');

exports.getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find();

  res.status(200).json({
    success: true,
    data: reviews,
  });
});

exports.getReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: review,
  });
});

exports.createReview = asyncHandler(async (req, res) => {
  const { content, rating, order: orderId, coach } = req.body; // Add 'coach' field

  console.log('orderId:', orderId);
  console.log('Type of orderId:', typeof orderId);

  const order = await Order.findById(orderId);
  if (!order) {
    return res.status(400).json({
      success: false,
      error: 'Order not found.',
    });
  }

  console.log('order.status:', order.status);
  console.log('Type of order.status:', typeof order.status);

  if (order.status !== 'completed') {
    return res.status(400).json({
      success: false,
      error: 'Order is not completed.',
    });
  }

  // Check if the order's user matches the request's user
  if (order.customer.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      success: false,
      error: 'You are not authorized to create a review for this order.',
    });
  }

  const review = new Review({
    content,
    rating,
    customer: req.user._id, 
    coach, // Assign the 'coach' field
    order: orderId,
  });

  await review.save();

  res.status(201).json({
    success: true,
    data: review,
  });
});

exports.getReviewsByCoachId = asyncHandler(async (req, res, next) => {
  const coachId = req.params.coachId;
  const reviews = await Review.find({ coach: coachId });

  if (!reviews) {
    return res.status(404).json({ success: false, message: 'No reviews found for this coach' });
  }

  res.status(200).json({ success: true, data: reviews });
});

exports.updateReview = asyncHandler(async (req, res) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: review,
  });
});

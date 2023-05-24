const asyncHandler = require('../middlewares/asyncHandler');
const Service = require('../models/Service');
const Coach = require('../models/Coach');
// Create a new service for a coach
exports.createService = asyncHandler(async (req, res) => {
    const { title, description, duration, price } = req.body;
    const coach = await Coach.findById(req.params.id);
  
    // Check if the authenticated user is the coach or an admin
    if (req.user.id !== coach.user.toString() && req.user.type !== 'Admin') {
      return res.status(401).json({ msg: 'Not authorized to create this service' });
    }
  
    const service = new Service({
      coach: coach._id,
      title,
      description,
      duration,
      price
    });
  
    await service.save();
    coach.services.push(service._id);
    await coach.save();
    res.status(201).json(service);
  });
  
  // Update a service for a coach
  exports.updateService = asyncHandler(async (req, res) => {
    const { title, description, duration, price } = req.body;
    const service = await Service.findById(req.params.serviceId);
    const coach = await Coach.findById(service.coach);
  
    // Check if the authenticated user is the coach or an admin
    if (req.user.id !== coach.user.toString() && req.user.type !== 'Admin') {
      return res.status(401).json({ msg: 'Not authorized to update this service' });
    }
  
    service.title = title;
    service.description = description;
    service.duration = duration;
    service.price = price;
    await service.save();
    res.json(service);
  });
  
  // Delete a service for a coach
  exports.deleteService = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.serviceId);
    const coach = await Coach.findById(service.coach);
  
    // Check if the authenticated user is the coach or an admin
    if (req.user.id !== coach.user.toString() && req.user.type !== 'Admin') {
      return res.status(401).json({ msg: 'Not authorized to delete this service' });
    }
  
    await service.remove();
    coach.services.pull(service._id);
    await coach.save();
    res.status(204).json({ msg: 'Service deleted' });
  });
  
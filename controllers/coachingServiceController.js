const CoachingService = require('../models/CoachingService');

// Get all coaching services
exports.getAllCoachingServices = async (req, res) => {
  try {
    const services = await CoachingService.find();
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create a new coaching service
exports.createCoachingService = async (req, res) => {
  const { title, description, price } = req.body;

  try {
    const newService = new CoachingService({
      title,
      description,
      price,
    });

    const service = await newService.save();
    res.json(service);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update a coaching service
exports.updateCoachingService = async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;

  try {
    let service = await CoachingService.findById(id);

    if (!service) {
      return res.status(404).json({ msg: 'Coaching service not found' });
    }

    service.title = title;
    service.description = description;
    service.price = price;

    service = await service.save();

    res.json(service);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a coaching service
exports.deleteCoachingService = async (req, res) => {
  const { id } = req.params;

  try {
    let service = await CoachingService.findById(id);

    if (!service) {
      return res.status(404).json({ msg: 'Coaching service not found' });
    }

    await service.remove();

    res.json({ msg: 'Coaching service removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

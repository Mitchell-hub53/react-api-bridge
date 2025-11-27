const Message = require('../models/Message');

// @desc    Create new message
// @route   POST /api/messages
// @access  Public
exports.createMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ success: true, data: message });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

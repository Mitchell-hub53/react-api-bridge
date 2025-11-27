const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

exports.validateMessage = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Must be a valid email address'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').notEmpty().withMessage('Message is required'),
  handleValidationErrors,
];

exports.validateProject = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('imageUrl').isURL().withMessage('Image URL must be a valid URL'),
  body('projectUrl').optional({ checkFalsy: true }).isURL().withMessage('Project URL must be a valid URL'),
  handleValidationErrors,
];

exports.validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
];

const express = require('express');
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');
const { validateProject } = require('../middleware/validationMiddleware');

const router = express.Router();

router.route('/').get(getProjects).post(protect, validateProject, createProject);
router
  .route('/:id')
  .get(getProjectById)
  .put(protect, validateProject, updateProject)
  .delete(protect, deleteProject);

module.exports = router;

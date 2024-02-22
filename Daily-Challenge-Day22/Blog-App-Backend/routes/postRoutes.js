const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController.js')
const authenticateToken = require('../middlewares/authenticateToken.js')

router.get('/',authenticateToken,controller.getAll);
router.get('/:id',authenticateToken,controller.getOne);
router.post('/',authenticateToken,controller.createPost);
router.put('/:id',authenticateToken,controller.updatePost);
router.delete('/:id',authenticateToken,controller.deletePost);

module.exports = router;
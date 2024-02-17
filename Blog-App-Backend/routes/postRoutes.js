const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController.js')

router.get('/',controller.getAll);
router.get('/:id',controller.getOne);
router.post('/',controller.createPost);
router.put('/:id',controller.updatePost);
router.delete('/:id',controller.deletePost);

module.exports = router;
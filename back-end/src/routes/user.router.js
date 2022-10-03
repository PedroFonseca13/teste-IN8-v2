const router = require('express').Router();
const UserController = require('../controller/user.controller');

router.get('/', UserController.getAllUsers);
// router.post('/', UserController.createUser);
// router.get('/:id', ProductController.findProductByID);
// router.delete('/:id', ProductController.deleteProduct);


module.exports = router;

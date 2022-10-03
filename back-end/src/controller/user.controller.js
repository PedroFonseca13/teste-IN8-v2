const UserServices = require('../services/user.services')

const createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = await UserServices.create(name, email, phone);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

// const getAllProducts = async (req, res) => {
//   try {
//     const result = await ProductService.getAllProducts()

//     res.status(200).json(result);
//   } catch (error) {
//     res.status(error.status || 500).json({ message: error.message });
//   }
// }

// const findProductByID = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await ProductService.findProductByID(id);

//     if (!product) return res.status(404).json({ message: 'Product does not exist' });

//     res.status(200).json(product);
//   } catch (error) {
//     res.status(error.status || 500).json({ message: 'error.message' });
//   }
// };

// const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await ProductService.deleteProduct(id);
//     return res.status(200).send(`Produto ${id} deleted`);
//   } catch (error) {
//     res.status(error.status || 500).json({ message: error.message });
//   }
// };

module.exports = {
  createUser,
  // getAllProducts,
  // findProductByID,
  // deleteProduct
}

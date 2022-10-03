const { User } = require('../database/models');

const create = async (name, email, phone) => {
  const newUser = await User.create({ name, email, phone });

  return newUser;
}

const getAllUsers = async () => {
  const result = await User.findAll();
  console.log(result);
  return result
}

// const findProductByID = async (id) => {
//   const product = await Product.findOne({
//     where: { id },
//     attributes: { exclude: ['createdAt', 'updatedAt'] },
//   });

//   return product;
// };

// const deleteProduct = async (id) => {
//   const product = await Product.destroy({ where: { id } });
//   return product;
// };

module.exports = {
  create,
  getAllUsers,
  // findProductByID,
  // deleteProduct
}

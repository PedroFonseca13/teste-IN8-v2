export const getUser = async () => {
  try {
    const users = await fetch('http://localhost:3000/users');
    const data = await users.json();
    return data;
  } catch (err) {
    return err.message;
  }
};

// controllers/userController.js
const { AppDataSource } = require("../data-source");

const getUserRepository = () => AppDataSource.getRepository("User");

exports.getAllUsers = async (req, res) => {
  try {
    const userRepo = getUserRepository();
    const users = await userRepo.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

import { USER } from "../models/user.js";

// Валідація властивостей користувача
const validateUser = (user) => {
  const { email, phoneNumber, password } = user;
  if (!email || !email.endsWith('@gmail.com')) return false;
  if (!phoneNumber || !phoneNumber.startsWith('+380') || phoneNumber.length !== 13) return false;
  if (!password || password.length < 3) return false;
  return true;
};

// Валідація створення користувача
const createUserValid = (req, res, next) => {
  const { id, ...user } = req.body;
  const requiredFields = ["firstName", "lastName", "email", "phoneNumber", "password"];

  for (let field of requiredFields) {
    if (!user[field]) {
      return res.status(400).json({ error: true, message: `Field ${field} is required` });
    }
  }

  if (!validateUser(user)) {
    return res.status(400).json({ error: true, message: "User entity to create isn’t valid" });
  }
  next();
};

// Валідація оновлення користувача
const updateUserValid = (req, res, next) => {
  const { id, ...user } = req.body;
  if (Object.keys(user).length === 0 || !validateUser(user)) {
    return res.status(400).json({ error: true, message: "User entity to update isn’t valid" });
  }
  next();
};

export { createUserValid, updateUserValid };

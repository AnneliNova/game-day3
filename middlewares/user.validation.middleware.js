import { USER } from "../models/user.js";

const isGmail = (email) => email.endsWith("@gmail.com");
const isValidPhoneNumber = (phone) => /^\+380\d{9}$/.test(phone);
const isValidPower = (power) => Number.isInteger(power) && power >= 1 && power <= 100;
const isValidDefense = (defense) => Number.isInteger(defense) && defense >= 1 && defense <= 10;
const isValidHealth = (health) => Number.isInteger(health) && health >= 80 && health <= 120;
const isValidPassword = (password) => typeof password === 'string' && password.length >= 3;

const validateUser = (user) => {
  const { email, phoneNumber, power, defense, health, password } = user;
  if (!isGmail(email) || !isValidPhoneNumber(phoneNumber) || !isValidPower(power) || 
      !isValidDefense(defense) || (health && !isValidHealth(health)) || !isValidPassword(password)) {
    return false;
  }
  return true;
};

const createUserValid = (req, res, next) => {
  const { id, ...user } = req.body;
  if (!validateUser(user)) {
    return res.status(400).json({ error: true, message: "User entity to create isn’t valid" });
  }
  next();
};

const updateUserValid = (req, res, next) => {
  const { id, ...user } = req.body;
  if (Object.keys(user).length === 0 || !validateUser(user)) {
    return res.status(400).json({ error: true, message: "User entity to update isn’t valid" });
  }
  next();
};

export { createUserValid, updateUserValid };

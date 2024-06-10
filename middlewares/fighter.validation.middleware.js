import { FIGHTER } from "../models/fighter.js";

const isValidName = (name) => typeof name === 'string' && name.trim() !== '';
const isValidPower = (power) => Number.isInteger(power) && power >= 1 && power <= 100;
const isValidDefense = (defense) => Number.isInteger(defense) && defense >= 1 && defense <= 10;
const isValidHealth = (health) => Number.isInteger(health) && health >= 80 && health <= 120;

const validateFighter = (fighter) => {
  const { name, power, defense, health } = fighter;
  if (!isValidName(name) || !isValidPower(power) || !isValidDefense(defense) || (health && !isValidHealth(health))) {
    return false;
  }
  return true;
};

const createFighterValid = (req, res, next) => {
  const { id, ...fighter } = req.body;
  if (!validateFighter(fighter)) {
    return res.status(400).json({ error: true, message: "Fighter entity to create isn’t valid" });
  }
  next();
};

const updateFighterValid = (req, res, next) => {
  const { id, ...fighter } = req.body;
  if (Object.keys(fighter).length === 0 || !validateFighter(fighter)) {
    return res.status(400).json({ error: true, message: "Fighter entity to update isn’t valid" });
  }
  next();
};

export { createFighterValid, updateFighterValid };

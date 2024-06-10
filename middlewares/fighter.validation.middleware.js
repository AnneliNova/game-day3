import { FIGHTER } from "../models/fighter.js";

const validateFighter = (fighter) => {
  const { name, power, defense, health } = fighter;
  if (!name || typeof name !== 'string') return false;
  if (power !== undefined && (power < 1 || power > 100)) return false;
  if (defense !== undefined && (defense < 1 || defense > 10)) return false;
  if (health !== undefined && (health < 80 || health > 120)) return false;
  return true;
};

const createFighterValid = (req, res, next) => {
  const { id, ...fighter } = req.body;
  const requiredFields = ["name", "power", "defense"];

  for (let field of requiredFields) {
    if (!fighter[field]) {
      return res.status(400).json({ error: true, message: `Field ${field} is required` });
    }
  }

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

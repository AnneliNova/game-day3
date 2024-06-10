import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validator for FIGHTER entity during creation
  const { name, health, power, defense } = req.body;

  if (name === undefined || power === undefined || defense === undefined) {
    return res.status(400).send({ error: 'Missing required fields for fighter creation' });
  }

  if (typeof name !== 'string' || typeof health !== 'number' || typeof power !== 'number' || typeof defense !== 'number') {
    return res.status(400).send({ error: 'Invalid data types for fighter properties' });
  }

  const minMaxHP = (value) => {
    return value >= 80 && value <= 120;
  };

  if (health === undefined) {
    req.body.health = 100;
  } else {
    if (!minMaxHP(health)) {
      return res.status(400).send({ error: 'Health must be between 80 and 120' });
    }
  }

  const minMaxPower = (value) => {
    return value >= 1 && value <= 100;
  };

  if (!minMaxPower(power)){
    return res.status(400).send({ error: 'Power must be between 1 and 100' });
  };

  const minMaxDef = (value) => {
    return value >= 1 && value <= 10;
  };
  
  if (!minMaxDef(defense)) {
    return res.status(400).send({ error: 'Defense must be between 1 and 10' });
  }
  console.log("Validation successful");
  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  const { name, health, power, defense } = req.body;

  if (name === undefined || power === undefined || defense === undefined) {
    return res.status(400).send({ error: 'Missing required fields for fighter creation' });
  }

  if (typeof name !== 'string' || typeof health !== 'number' || typeof power !== 'number' || typeof defense !== 'number') {
    return res.status(400).send({ error: 'Invalid data types for fighter properties' });
  }

  const minMaxHP = (value) => {
    return value >= 80 && value <= 120;
  };

  if (health === undefined) {
    req.body.health = 100;
  } else {
    if (!minMaxHP(health)) {
      return res.status(400).send({ error: 'Health must be between 80 and 120' });
    }
  }
  
  const minMaxPower = (value) => {
    return value >= 1 && value <= 100;
  };

  if (!minMaxPower(power)){
    return res.status(400).send({ error: 'Power must be between 1 and 100' });
  };

  const minMaxDef = (value) => {
    return value >= 1 && value <= 10;
  };
  
  if (!minMaxDef(defense)) {
    return res.status(400).send({ error: 'Defense must be between 1 and 10' });
  }

  console.log("Validation successful");
  next();
};

export { createFighterValid, updateFighterValid };
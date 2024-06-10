import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validator for FIGHTER entity during creation
  const { firstName, lastName, email, phoneNumber, password } = req.body;

  if (firstName === undefined || lastName === undefined || email === undefined || phoneNumber === undefined || password === undefined) {
    return res.status(400).send({ error: 'Missing required fields for user creation' });
  }

  if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string' || typeof phoneNumber !== 'string' || typeof password !== 'string') {
    return res.status(400).send({ error: 'Invalid data types for user properties' });
  }

  if (password.length < 3) {
    return res.status(400).send({ error: 'Password must be at least 3 characters long' });
  }

  const isGmailEmail = (email) => {
    const gmailRegex = /@gmail\.com$/i;
    return gmailRegex.test(email);
  };

  if (!isGmailEmail(email)) {
    return res.status(400).send({ error: 'Mail must be @gmail' });
  }

  const isUkrainePhoneNumber = (phoneNumber) => {
    const ukraineRegex = /^\+380/;
    return ukraineRegex.test(phoneNumber);
  };

  if (!isUkrainePhoneNumber(phoneNumber)){
    return res.status(400).send({ error: 'The phone number must have the +380 country code' });
  } else {
    if (phoneNumber.length !== 13){
      return res.status(400).send({ error: 'The phone number must have 13 digits' });
    }
  }

  console.log("Validation successful");
  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  next();
};

export { createUserValid, updateUserValid };
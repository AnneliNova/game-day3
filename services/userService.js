import { userRepository } from "../repositories/userRepository.js";

class UserService {
  getAll() {
    return userRepository.getAll();
  }

  getById(id) {
    return userRepository.getById(id);
  }

  create(user) {
    const existingUserByEmail = userRepository.getOne({ email: user.email });
    if (existingUserByEmail) {
      throw new Error("User with this email already exists");
    }

    const existingUserByPhone = userRepository.getOne({ phoneNumber: user.phoneNumber });
    if (existingUserByPhone) {
      throw new Error("User with this phone number already exists");
    }

    return userRepository.create(user);
  }

  update(id, user) {
    const existingUser = userRepository.getById(id);
    if (!existingUser) {
      throw new Error("User not found");
    }

    if (user.email && user.email !== existingUser.email) {
      const existingUserByEmail = userRepository.getOne({ email: user.email });
      if (existingUserByEmail) {
        throw new Error("User with this email already exists");
      }
    }

    if (user.phoneNumber && user.phoneNumber !== existingUser.phoneNumber) {
      const existingUserByPhone = userRepository.getOne({ phoneNumber: user.phoneNumber });
      if (existingUserByPhone) {
        throw new Error("User with this phone number already exists");
      }
    }

    return userRepository.update(id, user);
  }

  delete(id) {
    const existingUser = userRepository.getById(id);
    if (!existingUser) {
      throw new Error("User not found");
    }

    return userRepository.delete(id);
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };

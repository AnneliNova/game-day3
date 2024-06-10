import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user
  // GET /api/users
  async getAllUsers(req, res) {
    try {
      const users = await userRepository.getAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  // GET /api/users/:id
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await userRepository.getOne(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  // POST /api/users
  async createUser(req, res) {
    const newUser = req.body;
    try {
      const existentUser = this.search;
      if (existentUser) {
        const createdUser = await userRepository.create(newUser);
        res.status(201).json(createdUser);
      } else {
        return res.status(400).json({ error: 'User already exist' });
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  // PUT /api/users/:id
  async updateUser(req, res) {
    const { id } = req.params;
    const updatedUserData = req.body;
    try {
      const updatedUser = await userRepository.update(id, updatedUserData);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  // DELETE /api/users/:id
  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deletedUser = await userRepository.delete(id);
      if (deletedUser) {
        res.json(deletedUser);
      } else {
        res.status(404).send("Fighter not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
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
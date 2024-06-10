import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await userService.getById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

router.post("/", createUserValid, async (req, res) => {
  try {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

router.patch("/:id", updateUserValid, async (req, res) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await userService.delete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

export { router };

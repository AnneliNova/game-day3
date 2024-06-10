import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await userService.getById(req.params.id);
    if (!user) {
      res.status(404).json({ error: true, message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", createUserValid, async (req, res, next) => {
  try {
    const user = await userService.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", updateUserValid, async (req, res, next) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    if (!user) {
      res.status(404).json({ error: true, message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const user = await userService.delete(req.params.id);
    if (!user) {
      res.status(404).json({ error: true, message: "User not found" });
    } else {
      res.status(200).json({ message: "User deleted" });
    }
  } catch (error) {
    next(error);
  }
});

export { router };

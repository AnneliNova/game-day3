import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post(
  "/login",
  async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await authService.login(email, password);
      if (user) {
        res.data = user;
      } else {
        res.err = { message: "Invalid credentials" };
      }
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

export { router };

import { Router } from "express";
import { fightersService } from "../services/fightService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";

const router = Router();

router.post(
  "/",
  async (req, res, next) => {
    try {
      const fight = await fightersService.createFight(req.body);
      res.data = fight;
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.get(
  "/",
  async (req, res, next) => {
    try {
      const fights = await fightersService.getFights();
      res.data = fights;
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.get(
  "/:id",
  async (req, res, next) => {
    try {
      const fight = await fightersService.getFightById(req.params.id);
      if (!fight) {
        res.err = { message: "Fight not found" };
      } else {
        res.data = fight;
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

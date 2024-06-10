import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const fighters = await fighterService.getAll();
    res.status(200).json(fighters);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const fighter = await fighterService.getById(req.params.id);
    if (!fighter) {
      res.status(404).json({ error: true, message: "Fighter not found" });
    } else {
      res.status(200).json(fighter);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", createFighterValid, async (req, res, next) => {
  try {
    const fighter = await fighterService.create(req.body);
    res.status(200).json(fighter);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", updateFighterValid, async (req, res, next) => {
  try {
    const fighter = await fighterService.update(req.params.id, req.body);
    if (!fighter) {
      res.status(404).json({ error: true, message: "Fighter not found" });
    } else {
      res.status(200).json(fighter);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const fighter = await fighterService.delete(req.params.id);
    if (!fighter) {
      res.status(404).json({ error: true, message: "Fighter not found" });
    } else {
      res.status(200).json({ message: "Fighter deleted" });
    }
  } catch (error) {
    next(error);
  }
});

export { router };

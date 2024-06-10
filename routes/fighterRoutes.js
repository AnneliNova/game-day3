import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const fighters = await fighterService.getAll();
    res.status(200).json(fighters);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const fighter = await fighterService.getById(req.params.id);
    if (!fighter) {
      return res.status(404).json({ error: true, message: "Fighter not found" });
    }
    res.status(200).json(fighter);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

router.post("/", createFighterValid, async (req, res) => {
  try {
    const fighter = await fighterService.create(req.body);
    res.status(201).json(fighter);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

router.patch("/:id", updateFighterValid, async (req, res) => {
  try {
    const fighter = await fighterService.update(req.params.id, req.body);
    if (!fighter) {
      return res.status(404).json({ error: true, message: "Fighter not found" });
    }
    res.status(200).json(fighter);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const fighter = await fighterService.delete(req.params.id);
    if (!fighter) {
      return res.status(404).json({ error: true, message: "Fighter not found" });
    }
    res.status(200).json({ message: "Fighter deleted" });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

export { router };

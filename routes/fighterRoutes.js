import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter

// GET /api/fighters/
router.get('/', async (req, res) => {
  await fighterService.getAllFighters(req, res);
});

// GET /api/fighters/:id
router.get('/:id', async (req, res) => {
  await fighterService.getFighterById(req, res);
});

// POST /api/fighters
router.post('/', createFighterValid, async (req, res) => {
  await fighterService.createFighter(req, res);
});

// PUT /api/fighters/:id
router.put('/:id', updateFighterValid, async (req, res) => {
  await fighterService.updateFighter(req, res);
});

// DELETE /api/fighters/:id
router.delete('/:id', async (req, res) => {
  await fighterService.deleteFighter(req, res);
});

export { router };
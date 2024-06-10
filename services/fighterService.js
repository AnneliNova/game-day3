import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  // GET /api/fighters
  async getAllFighters(req, res) {
    try {
      const fighters = await fighterRepository.getAll();
      res.json(fighters);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  // GET /api/fighters/:id
  async getFighterById(req, res) {
    const { id } = req.params;
    try {
      const fighter = await fighterRepository.getOne(id);
      if (fighter) {
        res.json(fighter);
      } else {
        res.status(404).send("Fighter not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  // POST /api/fighters
  async createFighter(req, res) {
    const newFighter = req.body;
    try {
      const createdFighter = await fighterRepository.create(newFighter);
      res.status(201).json(createdFighter);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error.Try again");
    }
  }

  // PUT /api/fighters/:id
  async updateFighter(req, res) {
    const { id } = req.params;
    const updatedFighterData = req.body;
    try {
      const updatedFighter = await fighterRepository.update(id, updatedFighterData);
      if (updatedFighter) {
        res.json(updatedFighter);
      } else {
        res.status(404).send("Fighter not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error. Try again");
    }
  }

  // DELETE /api/fighters/:id
  async deleteFighter(req, res) {
    const { id } = req.params;
    try {
      const deletedFighter = await fighterRepository.delete(id);
      if (deletedFighter) {
        res.json(deletedFighter);
      } else {
        res.status(404).send("Fighter not found. Try again");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error. Try again");
    }
  }

}

const fighterService = new FighterService();

export { fighterService };
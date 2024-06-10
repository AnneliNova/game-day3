import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  async getAll() {
    return fighterRepository.getAll();
  }

  async getById(id) {
    return fighterRepository.getById(id);
  }

  async create(fighter) {
    if (fighterRepository.getOne({ name: fighter.name })) {
      throw new Error("Fighter with this name already exists");
    }
    return fighterRepository.create(fighter);
  }

  async update(id, fighter) {
    const existingFighter = fighterRepository.getById(id);
    if (!existingFighter) {
      throw new Error("Fighter not found");
    }
    if (fighter.name && fighter.name !== existingFighter.name) {
      if (fighterRepository.getOne({ name: fighter.name })) {
        throw new Error("Fighter with this name already exists");
      }
    }
    return fighterRepository.update(id, fighter);
  }

  async delete(id) {
    return fighterRepository.delete(id);
  }
}

const fighterService = new FighterService();

export { fighterService };

import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  getAll() {
    return fighterRepository.getAll();
  }

  getById(id) {
    return fighterRepository.getById(id);
  }

  create(fighter) {
    return fighterRepository.create(fighter);
  }

  update(id, fighter) {
    return fighterRepository.update(id, fighter);
  }

  delete(id) {
    return fighterRepository.delete(id);
  }
}

const fighterService = new FighterService();

export { fighterService };

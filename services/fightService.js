import { fightRepository } from "../repositories/fightRepository.js";

class FightersService {
  getFights() {
    return fightRepository.getAll();
  }

  getFightById(id) {
    return fightRepository.getById(id);
  }

  createFight(fight) {
    return fightRepository.create(fight);
  }

  updateFight(id, fight) {
    return fightRepository.update(id, fight);
  }

  deleteFight(id) {
    return fightRepository.delete(id);
  }
}

const fightersService = new FightersService();

export { fightersService };

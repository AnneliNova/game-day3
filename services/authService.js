import { userService } from "./userService.js";

class AuthService {
  async login(email, password) {
    const user = userService.search({ email, password });
    return user;
  }
}

const authService = new AuthService();

export { authService };



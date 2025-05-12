import User from "../Models/user.model";


class UserDAO {

  async registerUser(userData) {
    try {

        return await User.create(userData);

    } catch (error) {
      console.error('[ user.dao.js ] Error al registrar el usuario: ' + error.message);
      throw error;
    }
  }

  async find(uid) {
    try {

      return await User.find(id);

    } catch (error) {
      console.error('[ user.dao.js ] Error al encontrar el usuario: ' + error.message);
      throw error;
    }
  }

}

export default new UserDAO();

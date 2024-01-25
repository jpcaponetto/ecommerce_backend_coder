import messageDao from "../dao/message.dao.js";

export default class messageService {
  static getAll() {
    return messageDao.getAll();
  }
}

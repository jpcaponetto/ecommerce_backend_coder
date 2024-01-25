import messageService from "../services/message.services.js";

export default class messageController {
  static getAll() {
    return messageService.getAll();
  }
}

import ticketDao from "../dao/ticket.dao.js";
import { faker } from "@faker-js/faker";

export default class ticketServices {
  static createTicket(ticket) {
    ticket.code = faker.string.uuid();
    return ticketDao.createTicket(ticket);
  }
}

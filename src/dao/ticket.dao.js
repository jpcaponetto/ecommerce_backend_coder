import ticketSchema from "./models/ticket.model.js";

export default class ticketDao {
  static createTicket(ticket) {
    return ticketSchema.create(ticket);
  }
}

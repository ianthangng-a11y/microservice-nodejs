import { Listener, OrderCreatedEvent, Subject } from "@ianticketing/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from './queue-group-name';
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../ticket-updated-publisher";

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
  subject: Subject.OrderCreated = Subject.OrderCreated;
  queueGroupName= queueGroupName;
  
  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    // Find  the ticket that the order is reserving
    const ticket = await Ticket.findById(data.ticket.id);
    
    // If no ticket, throw error
    if (!ticket) {
      throw new Error('Ticket not found.');
    }
    
    // Mark the ticket as being reserved by setting its orderId property
    ticket.set({ orderId: data.id });
    
    // Save the ticket and notify that I just updated the orderId inside the ticket
    await ticket.save();
    await new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      price: ticket.price,
      title: ticket.title,
      userId: ticket.userId,
      orderId: ticket.orderId,
      version: ticket.version,
    });
    
    // ack the message
    msg.ack();
  }
}
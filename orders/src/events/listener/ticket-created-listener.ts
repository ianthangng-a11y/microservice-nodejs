import { Listener, Subject, TicketCreatedEvent } from "@ianticketing/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from './queue-group-name';
import { Ticket } from "../../models/ticket";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subject.TicketCreated = Subject.TicketCreated;
  queueGroupName = queueGroupName;
  
  async onMessage(data: TicketCreatedEvent['data'], msg: Message){
    const { id, title, price } = data;
    const ticket = Ticket.build({
      id,
      title,
      price,
    });
    console.log('Message received:', data);
    
    await ticket.save();
    
    msg.ack();
  };
}
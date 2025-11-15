import { Publisher, Subject, TicketCreatedEvent } from '@ianticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subject.TicketCreated = Subject.TicketCreated;
}
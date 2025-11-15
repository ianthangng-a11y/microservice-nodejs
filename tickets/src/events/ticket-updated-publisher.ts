import { Publisher, Subject, TicketUpdatedEvent } from '@ianticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subject.TicketUpdated = Subject.TicketUpdated;
}
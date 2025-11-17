import { OrderCreatedEvent, Publisher, Subject } from "@ianticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
  subject: Subject.OrderCreated = Subject.OrderCreated;
}
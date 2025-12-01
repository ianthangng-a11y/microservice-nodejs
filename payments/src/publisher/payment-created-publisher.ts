import { PaymentCreatedEvent, Publisher, Subject } from "@ianticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subject.PaymentCreated = Subject.PaymentCreated;
  
}
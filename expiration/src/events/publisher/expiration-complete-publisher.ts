import { ExpirationCompleteEvent, Publisher, Subject } from "@ianticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subject.ExpirationComplete = Subject.ExpirationComplete;
}
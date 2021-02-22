import { Subjects, Publisher, PaymentCreatedEvent } from '@narmi-sgtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

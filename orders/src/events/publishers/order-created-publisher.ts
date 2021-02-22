import { Publisher, OrderCreatedEvent, Subjects } from '@narmi-sgtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

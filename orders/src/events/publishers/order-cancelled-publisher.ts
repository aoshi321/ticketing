import { Subjects, Publisher, OrderCancelledEvent } from '@narmi-sgtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

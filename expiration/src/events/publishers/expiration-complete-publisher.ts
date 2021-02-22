import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@narmi-sgtickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

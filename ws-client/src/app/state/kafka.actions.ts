export class AddMessageAction {
  static readonly type = '[Kafka] Add message';
  constructor(public message: string) { }
}

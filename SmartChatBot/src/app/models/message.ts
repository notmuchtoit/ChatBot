export class Message {
  constructor(
    public projectID: string,
    public content: string,
    public sentBy: 'BOT' | 'USER',
    public timestamp?: Date
  ) {}
}

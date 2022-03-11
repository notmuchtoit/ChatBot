export class Response {
  constructor(
    public responseMessage: string,
    public originalQuery: string,
    public intent: string
  ) {}
}

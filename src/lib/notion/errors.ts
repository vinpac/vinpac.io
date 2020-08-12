export class NotionPageNotFound extends Error {
  constructor(
    message: string,
    public queriedField: string,
    public query: string,
  ) {
    super(message)
  }
}

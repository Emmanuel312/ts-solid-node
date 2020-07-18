import MailProvider from '../models/IMailProvider';

interface Message {
  to: string;
  body: string;
}

export default class FakeMailProvider implements MailProvider {
  private messages: Message[] = [];

  public async sendMail(to: string, body: string) {
    this.messages.push({ to, body });
  }
}

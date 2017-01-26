import { ChatSocketPage } from './app.po';

describe('chat-socket App', function() {
  let page: ChatSocketPage;

  beforeEach(() => {
    page = new ChatSocketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

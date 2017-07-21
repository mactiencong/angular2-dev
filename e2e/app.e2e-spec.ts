import { MaticoAppPage } from './app.po';

describe('matico-app App', () => {
  let page: MaticoAppPage;

  beforeEach(() => {
    page = new MaticoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

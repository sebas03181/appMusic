import { ApuestasPage } from './app.po';

describe('apuestas App', () => {
  let page: ApuestasPage;

  beforeEach(() => {
    page = new ApuestasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

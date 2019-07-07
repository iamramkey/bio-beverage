import { BioBeveragePage } from './app.po';

describe('bio-beverage App', () => {
  let page: BioBeveragePage;

  beforeEach(() => {
    page = new BioBeveragePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

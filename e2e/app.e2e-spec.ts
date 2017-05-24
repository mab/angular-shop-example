import { AngularShopExamplePage } from './app.po';

describe('angular-shop-example App', () => {
  let page: AngularShopExamplePage;

  beforeEach(() => {
    page = new AngularShopExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { DdlibtestCPage } from './app.po';

describe('ddlibtest-c App', () => {
  let page: DdlibtestCPage;

  beforeEach(() => {
    page = new DdlibtestCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

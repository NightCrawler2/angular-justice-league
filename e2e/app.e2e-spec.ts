import { AngularJusticeLeaguePage } from './app.po';

describe('angular-justice-league App', function() {
  let page: AngularJusticeLeaguePage;

  beforeEach(() => {
    page = new AngularJusticeLeaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

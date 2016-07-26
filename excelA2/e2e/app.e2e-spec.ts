import { ExcelA2Page } from './app.po';

describe('excel-a2 App', function() {
  let page: ExcelA2Page;

  beforeEach(() => {
    page = new ExcelA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

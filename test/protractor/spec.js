describe('gitHubSearch', function() {

  it('has the title GitHub User Search', function(){
    browser.get("http://localhost:8080");
    expect(browser.getTitle()).toEqual('GitHub User Search')
  })

  it('can search for meads58', function() {
    element(by.model('searchTerm')).sendKeys('meads58')
    $('.btn').click();
    var links = element.all(by.css('.list-group'));
    expect(links.get(0).getText()).toBe("meads58");

  })


})
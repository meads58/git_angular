describe("GitHubUserSearch", function() {
  beforeEach(module("GitUserSearch"));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller("GitSearchController", {
      $scope: scope
    });
  }));

  it("initialises with an empty search and term", function() {
    expect(scope.searchResult).toBeUndefined();
    expect(scope.searchTerm).toBeUndefined();
  })

  describe('when a user searches.', function() {

    var items = [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      }, {

        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];

    it('displays search results', function() {
      scope.doSearch();
      expect(scope.searchResult.items).toEqual(items)
    })

  })


});
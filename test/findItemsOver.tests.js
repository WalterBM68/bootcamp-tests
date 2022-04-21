var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

describe("This is findItemsOver Function", function () {
    it("Products that have quantity higher than the threshold on the first item list", function () {
      assert.deepEqual([
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ] ,findItemsOver(itemList, 20));
    });
    it("Products that have quantity higher than the threshold on the second item list", function () {
      assert.deepEqual([] ,findItemsOver(itemList2, 20));
    });
    it("Products that have quantity higher than the threshold on the third item list", function () {
      assert.deepEqual([
        {name : 'apples', qty : 40},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ], findItemsOver(itemList3, 20));
    });
});
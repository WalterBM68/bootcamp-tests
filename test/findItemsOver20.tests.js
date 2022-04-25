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

describe("This is findItemsOver20 function", function () {
  it("Should return products that have quantity higher than 20 on the first item list", function () {
    assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}] ,findItemsOver20(itemList));
  });
  it("Should return products that have quantity higher than 20 on the second item list", function () {
    assert.deepEqual([] ,findItemsOver20(itemList2));
  });
  it("Should return products that have quantity higher than 20 on the third item list", function () {
    assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}], findItemsOver20(itemList3));
  });
});
describe("The yearsAgo function", function () {
    it("Should return 75 years, it's 75yrs ago from 1947 to 2022", function () {
      assert.equal(75, yearsAgo(1947));
    });
    it("Should return 26 years, it's 26yrz ago from 1996 to 2022", function () {
      assert.equal(26, yearsAgo(1996));
    });
    it("Should return 22 years, it's 22yrz ago from 2000 to 2022", function () {
      assert.equal(22, yearsAgo(2000));
    });
    it("Should return 7 years, it's 7yrs ago from 2015 to 2022", function () {
      assert.equal(7, yearsAgo(2015));
    });
});
  
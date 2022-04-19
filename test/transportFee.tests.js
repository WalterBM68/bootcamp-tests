describe("The transportFee function", function () {
    it("Well done! you got it", function () {
      assert.equal('R20' ,transportFee("morning"));
    });
    it("Well done! you got it", function () {
      assert.equal('R10' ,transportFee("afternoon"));
    });
    it("Well done! you got it", function () {
      assert.equal('free', transportFee("nightshift"));
    });
});
  
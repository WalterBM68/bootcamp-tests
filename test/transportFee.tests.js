describe("The transportFee function", function () {
    it("Bus fee for the morning shift", function () {
      assert.equal('R20' ,transportFee("morning"));
    });
    it("Bus fee for the afternoon shift", function () {
      assert.equal('R10' ,transportFee("afternoon"));
    });
    it("Bus fee for the night shift", function () {
      assert.equal('free', transportFee("nightshift"));
    });
});
  
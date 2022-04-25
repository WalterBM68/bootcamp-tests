describe("The transportFee function", function () {
    it("Should return R20 because it's the Bus fee for the morning shift", function () {
      assert.equal('R20' ,transportFee("morning"));
    });
    it("Should return R10 because it's the Bus fee for the afternoon shift", function () {
      assert.equal('R10' ,transportFee("afternoon"));
    });
    it("Should return free because the Bus is free for the night shift", function () {
      assert.equal('free', transportFee("nightshift"));
    });
});
  
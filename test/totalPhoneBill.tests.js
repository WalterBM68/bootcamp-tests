// R2.75 per call
// R0.65 per sms
describe("The totalPhoneBill function", function () {
    it("Total amount of 2 sms sent", function () {
      assert.equal('R1.30' ,totalPhoneBill("sms, sms"));
    });
    it("Total amount of 3 sms sent & 3 calls made", function () {
      assert.equal('R10.20' ,totalPhoneBill("call, sms, call, sms, call, sms"));
    });
    it("Total amount of 6 sms sent", function () {
      assert.equal('R3.90', totalPhoneBill("sms, sms, sms, sms, sms, sms"));
    });
    it("The total amount of 3 calls made and 1 sms sent", function () {
        assert.equal('R8.90', totalPhoneBill("call, call, call, sms"));
    });
});
  
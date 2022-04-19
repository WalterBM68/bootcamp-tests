// R2.75 per call
// R0.65 per sms
describe("The totalPhoneBill function", function () {
    it("Congrats you got it", function () {
      assert.equal('R1.30' ,totalPhoneBill("sms, sms"));
    });
    it("Congrats you got it", function () {
      assert.equal('R10.20' ,totalPhoneBill("call, sms, call, sms, call, sms"));
    });
    it("Congrats you got it", function () {
      assert.equal('R0.65', totalPhoneBill("sms"));
    });
    it("Congrats you got it", function () {
        assert.equal('R8.90', totalPhoneBill("call, call, call, sms"));
    });
});
  
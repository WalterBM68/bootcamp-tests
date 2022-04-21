describe("The countAllPaarl function", function () {
  it("Two Paarl registration number plates", function () {
    assert.equal(2, countAllPaarl("CJ 275, CA 501, CY 329, CJ 107"));
  });
  it("One Paarl registration number plate", function () {
    assert.equal(1, countAllPaarl("ND 14589, CJ 7001, CF 6511"));
  });
  it("Zero, if there's no Paarl registration number plate", function () {
    assert.equal(0, countAllPaarl("FK 55 DC GP, NUZ 50, NF 45"));
  });
  it("Three Paarl registration number plates", function () {
    assert.equal(3, countAllPaarl("NP 7489, CJ 154, CJ 10998, NJ 654, CJ 890"));
  });
});

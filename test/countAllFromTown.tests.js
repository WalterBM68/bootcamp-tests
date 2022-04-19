describe("The countAllFromTown function", function () {
  it("Bravo! you got it", function () {
    assert.equal(2, countAllFromTown("CJ 275, ND 405, NJ 8007, ND 450, NP 459", "ND"));
  });
  it("Bravo! you got it", function () {
    assert.equal(4, countAllFromTown("NUZ 14589, CJ 7001, NUZ 6511, NPS 100956, NUZ 120, CA 78952, NUZ 7856","NUZ"));
  });
  it("Bravo! you got it", function () {
    assert.equal(0, countAllFromTown("FK 55 DC GP, NUZ 50, NF 45","ND"));
  });
  it("Bravo! you got it", function () {
    assert.equal(1, countAllFromTown("NP 7489, CJ 154, CJ 10998, NJ 654, CJ 890","NP"));
  });
});

describe("This is fromWhere function", function () {
    it("Wow! you nailed it", function () {
      assert.equal('Some other place!' ,fromWhere("CC"));
    });
    it("Wow! you nailed it", function () {
      assert.equal('Bellville' ,fromWhere("CY"));
    });
    it("Wow! you nailed it", function () {
      assert.equal('Cape Town', fromWhere("CA"));
    });
    it("Wow! you nailed it", function () {
        assert.equal('Paarl', fromWhere("CJ"));
    });
});
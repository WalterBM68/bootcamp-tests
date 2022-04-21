describe("This is fromWhere function", function () {
    it("Other towns registration number", function () {
      assert.equal('Some other place!' ,fromWhere("CC"));
    });
    it("Bellville registration number", function () {
      assert.equal('Bellville' ,fromWhere("CY"));
    });
    it("The city of Cape Town registration number", function () {
      assert.equal('Cape Town', fromWhere("CA"));
    });
    it("Paarl registration number", function () {
        assert.equal('Paarl', fromWhere("CJ"));
    });
});
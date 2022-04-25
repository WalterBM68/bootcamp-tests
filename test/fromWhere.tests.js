describe("This is fromWhere function", function () {
    it("Should return 'Some other place!' ", function () {
      assert.equal('Some other place!' ,fromWhere("CC"));
    });
    it("Should return 'Bellville' because the registration number belongs to Bellville", function () {
      assert.equal('Bellville' ,fromWhere("CY"));
    });
    it("Should return 'Cape Town' since the registration number belongs to Cape Town", function () {
      assert.equal('Cape Town', fromWhere("CA"));
    });
    it("Should return 'Paarl' because CJ belongs to Paarl", function () {
        assert.equal('Paarl', fromWhere("CJ"));
    });
});
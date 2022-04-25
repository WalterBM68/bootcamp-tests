describe('The regCheck function', function () {
    it("It should return true, the registration number is from Gauteng", function () {
        assert.equal(true ,regCheck('DC 55 YU GP', 'GP'));
    });
    it("It should return false, the registration number doesn't belong to Eastern Cape", function () {
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });
    it("It should return true because the registration number is from Limpopo", function () {
        assert.equal(true, regCheck('5566 L', 'L'));
    });
    it("It should return false because the registration number isn't from Mpumalanga", function () {
        assert.equal(false, regCheck('FGT 123 MM', 'MP'));
    });
});
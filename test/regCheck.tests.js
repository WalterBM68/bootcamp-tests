describe('The regCheck function', function () {
    it('Bravo! you got it', function () {
        assert.equal(true ,regCheck('DC 55 YU GP', 'GP'));
    });
    it('Bravo! you got it', function () {
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });
    it('Bravo! you got it', function () {
        assert.equal(true, regCheck('5566 L', 'L'));
    });
    it('Bravo! you got it', function () {
        assert.equal(false, regCheck('FGT 123 MM', 'MP'));
    });
});
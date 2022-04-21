describe('The regCheck function', function () {
    it('The correct Gauteng reg number', function () {
        assert.equal(true ,regCheck('DC 55 YU GP', 'GP'));
    });
    it('The incorrect Eastern Cape reg number', function () {
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });
    it('The correct Limpopo reg number', function () {
        assert.equal(true, regCheck('5566 L', 'L'));
    });
    it('The incorrect Mpumalanga reg number', function () {
        assert.equal(false, regCheck('FGT 123 MM', 'MP'));
    });
});
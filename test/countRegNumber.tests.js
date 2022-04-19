describe('The countRegNumber function', function () {
    it('Well done! you got it', function () {
        assert.equal(3 ,countRegNumber('num, code, coding'));
    });
    it('Well done! you got it', function () {
        assert.equal(4, countRegNumber('EC, GP, ND, L'));
    });
    it('Well done! you got it', function () {
        assert.equal(1, countRegNumber('EC'));
    });
});
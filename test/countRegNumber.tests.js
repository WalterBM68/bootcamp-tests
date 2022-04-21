describe('The countRegNumber function', function () {
    it('Three registration number plates', function () {
        assert.equal(3 ,countRegNumber('ND 1475-5260, CA 18257, CJ 895-620'));
    });
    it('Four registration number plates', function () {
        assert.equal(4, countRegNumber('JCG 7820 EC, KF 12 YY GP, NUZ 500, KFY 562 CZ L'));
    });
    it('One registration number plate', function () {
        assert.equal(1, countRegNumber('KCF 452 PU EC'));
    });
});
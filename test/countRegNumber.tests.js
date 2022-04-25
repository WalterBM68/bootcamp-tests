describe('The countRegNumber function', function () {
    it('It should return 3 because there are 3 registration number plates', function () {
        assert.equal(3 ,countRegNumber('ND 1475-5260, CA 18257, CJ 895-620'));
    });
    it('It should return 4 because there are 4 registration number plates', function () {
        assert.equal(4, countRegNumber('JCG 7820 EC, KF 12 YY GP, NUZ 500, KFY 562 CZ L'));
    });
    it('It should return 1, there is only 1 registration number', function () {
        assert.equal(1, countRegNumber('KCF 452 PU EC'));
    });
});
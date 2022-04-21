describe('This isFromBellville function' , function(){
    it("The correct Bellville registration number" , function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('The incorrect Bellville registration number' , function(){
        assert.equal(false ,isFromBellville('CA 405'));
    });
    it('Another incorrect Bellville registration number' , function(){
        assert.equal(false ,isFromBellville('CJ 7825'));
    });
    it('Then finally the correct Bellville reg number' , function(){
        assert.equal(true ,isFromBellville('CY 2001'));
    });
});
describe('This isFromBellville function' , function(){
    it('Wow! you got it hey' , function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('Wow! you got it hey' , function(){
        assert.equal(false ,isFromBellville('CA 405'));
    });
    it('Wow! you got it hey' , function(){
        assert.equal(false ,isFromBellville('CJ 7825'));
    });
    it('Wow! You got it hey' , function(){
        assert.equal(true ,isFromBellville('CY 2001'));
    });
});
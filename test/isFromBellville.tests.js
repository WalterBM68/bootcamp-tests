describe('This isFromBellville function' , function(){
    it("It should true since the Bellville registration is correct" , function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it("It should false because CA is the Cape Town registration number not Bellville" , function(){
        assert.equal(false ,isFromBellville('CA 405'));
    });
    it("It should false because CJ isn't the Bellville registration number" , function(){
        assert.equal(false ,isFromBellville('CJ 7825'));
    });
    it("It should true since the Bellville registration is correct" , function(){
        assert.equal(true ,isFromBellville('CY 2001'));
    });
});
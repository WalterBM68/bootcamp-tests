describe('This is greet function' , function(){
    it("Should return 'Hello, Retumetsi' greeting the first neighbour" , function(){
        assert.equal('Hello, Retumetsi' ,greet('Retumetsi'));
    });
    it("It should return 'Hello, Morena' greeting the second neighbour" , function(){
        assert.equal('Hello, Morena' ,greet('Morena'));
    });
    it("Should return 'Hello, Kgotso' greeting the third neighbour" , function(){
        assert.equal('Hello, Kgotso' ,greet('Kgotso'));
    });
});
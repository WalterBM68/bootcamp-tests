describe('This is greet function' , function(){
    it('Greeting my first neighbour' , function(){
        assert.equal('Hello, Retumetsi' ,greet('Retumetsi'));
    });
    it('Greeting my second neighbour' , function(){
        assert.equal('Hello, Morena' ,greet('Morena'));
    });
    it('Greeting my neighbour who is on the back' , function(){
        assert.equal('Hello, Kgotso' ,greet('Kgotso'));
    });
});
describe("This isWeekday function", function () {
  it("Hay! you nailed it", function () {
    assert.equal(true, isWeekday("Monday"));
  });
  it("Hay! you nailed it", function () {
    assert.equal(false, isWeekday("Saturday"));
  });
  it("Hay! you nailed it", function () {
    assert.equal(true, isWeekday("Friday"));
  });
  it("Hay! you nailed it", function () {
    assert.equal(false, isWeekday("Sunday"));
  });
});

describe("This isWeekday function", function () {
  it("Should return true since Monday is a week day", function () {
    assert.equal(true, isWeekday("Monday"));
  });
  it("Should return false because Saturday is not a week day", function () {
    assert.equal(false, isWeekday("Saturday"));
  });
  it("Should return true because Friday is a week day", function () {
    assert.equal(true, isWeekday("Friday"));
  });
  it("Should return false because Sunday is not a week day", function () {
    assert.equal(false, isWeekday("Sunday"));
  });
});

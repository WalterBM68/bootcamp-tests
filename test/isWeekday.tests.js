describe("This isWeekday function", function () {
  it("Return true since Monday is a week day", function () {
    assert.equal(true, isWeekday("Monday"));
  });
  it("Return false because Saturday is not a week day", function () {
    assert.equal(false, isWeekday("Saturday"));
  });
  it("Return true because Friday is a week day", function () {
    assert.equal(true, isWeekday("Friday"));
  });
  it("Return false because Sunday is not a week day", function () {
    assert.equal(false, isWeekday("Sunday"));
  });
});

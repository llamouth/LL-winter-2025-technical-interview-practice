const maxSubArraySum = require("./problem");

test("Returns correct length for [2,3,1,2,4,3] and sum 7", () => {
  expect(maxSubArraySum([100,200,300,400], 2)).toEqual(700);
});

test("Returns correct length for [3, 2, 4] and sum 9", () => {
  expect(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4)).toEqual(39);
});

test("Returns correct length for [3, 3] and sum 52", () => {
  expect(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1],2)).toEqual(5);
});

test("Returns correct length for [1, 2, 3, 4, 5] and sum 39", () => {
  expect(maxSubArraySum([-3,4,0,-2,6,-1], 2)).toEqual(5);
});

/* eslint-disable no-undef */

describe('Sample', () => {
  it('should add two numbers', () => {
    expect(addNumbers(1, 2)).toEqual(3);
  });
});

const addNumbers = (num1: number, num2: number) => {
  return num1 + num2;
};

import { searchArrayByKeyValue } from "../searching";

describe('searchArrayByKeyValue function', () => {
  it('should return an array containing the value passed', () => {
    const input = [
      { name: 'iPhone 9'},
      { name: 'iPhone X'},
      { name: 'OPPO F19'},
    ];
    const expectedResult = [
      { name: 'iPhone 9' },
      { name: 'iPhone X'}
    ];

    expect(searchArrayByKeyValue(input, 'name', 'iPhone')).toMatchObject(expectedResult)
  });

  it('should return an empty array when the value passed is not found', () => {
    const input = [
      { name: 'iPhone 9'},
      { name: 'iPhone X'},
      { name: 'OPPO F19'},
    ];
    const expectedResult: [] = [];

    expect(searchArrayByKeyValue(input, 'name', 'Samsung')).toMatchObject(expectedResult)
  });
});

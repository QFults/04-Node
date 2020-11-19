const Food = require('../lib/Food.js')

test('getFoodGroup() should return food group', () => {
  const food = new Food('chicken', 50, 10, '12/12/2020', 'protein')
  expect(food.getFoodGroup()).toBe('protein')
})

test('getExpirationDate() should return expiration date', () => {
  const food = new Food('chocolate', 30, 3, '11/13/2021', 'sweets')
  expect(food.getExpirationDate()).toBe('11/13/2021')
})

test('getType() should return food', () => {
  const food = new Food('chocolate', 30, 3, '11/13/2021', 'sweets')
  expect(food.getType()).toBe('food')
})
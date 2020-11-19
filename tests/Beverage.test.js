const Beverage = require('../lib/Beverage.js')

test('getMainFlavor() should return main flavor', () => {
  const beverage = new Beverage('fruit punch', 20, 3, 12, 'fruit')
  expect(beverage.getMainFlavor()).toBe('fruit')
})

test('getFluidOZ() should return fluid oz', () => {
  const beverage = new Beverage('coffee', 100, 2, 8, 'coffee')
  expect(beverage.getFluidOZ()).toBe(8)
})

test('getType() should return beverage', () => {
  const beverage = new Beverage('coffee', 100, 2, 8, 'coffee')
  expect(beverage.getType()).toBe('beverage')
})
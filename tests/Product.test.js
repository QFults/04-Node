const Product = require('../lib/Product.js')

test('getName() should return product name', () => {
  const product = new Product('napkins', 100, 0.32)
  expect(product.getName()).toBe('napkins')
})

test('getQuantity() should return product quantity', () => {
  const product = new Product('cups', 200, 0.56)
  expect(product.getQuantity()).toBe(200)
})

test('getPrice() should return product price', () => {
  const product = new Product('napkins', 100, 0.32)
  expect(product.getPrice()).toBe(0.32)
})

test('getType() should return product', () => {
  const product = new Product('cups', 200, 0.56)
  expect(product.getType()).toBe('product')
})

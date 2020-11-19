const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const render = require('./lib/render.js')

const Product = require('./lib/Product.js')
const Food = require('./lib/Food.js')
const Beverage = require('./lib/Beverage.js')

const products = [
  new Product('cups', 200, 0.56),
  new Product('napkins', 100, 0.32),
  new Food('chicken', 50, 10, '12/12/2020', 'protein'),
  new Food('chocolate', 30, 3, '11/13/2021', 'sweets'),
  new Beverage('fruit punch', 20, 3, 12, 'fruit'),
  new Beverage('coffee', 100, 2, 8, 'coffee')
]

fs.writeFile(path.join(__dirname, 'output', 'index.html'), render(products), err => {
  if (err) { console.log(err) }
})

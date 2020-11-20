const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const render = require('./lib/render.js')

const Product = require('./lib/Product.js')
const Food = require('./lib/Food.js')
const Beverage = require('./lib/Beverage.js')

let products = []

const next = () => {
  inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'What would you like to do now?',
    choices: ['Make another item', 'Finish']
  })
    .then(({ choice }) => {
      switch (choice) {
        case 'Make another item':
          menu()
          break
        case 'Finish':
          fs.writeFile(path.join(__dirname, 'output', 'index.html'), render(products), err => {
            if (err) { console.log(err) }
          })
          break
      }
    })
    .catch(err => console.log(err))
}

const makeFood = ({ name, quantity, price }) => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'expirationDate',
      message: 'What is the expiration date?'
    },
    {
      type: 'input',
      name: 'foodGroup',
      message: 'What is the food group?'
    }
  ])
    .then(({ expirationDate, foodGroup }) => {
      products.push(new Food(name, quantity, price, expirationDate, foodGroup))
      next()
    })
    .catch(err => console.log(err))
}

const makeBeverage = ({ name, quantity, price }) => {
  inquirer.prompt([
    {
      type: 'number',
      name: 'fluidOZ',
      message: 'How many fluid OZ are there in one?'
    },
    {
      type: 'input',
      name: 'mainFlavor',
      message: 'What is the main flavor?'
    }
  ])
    .then(({ fluidOZ, mainFlavor }) => {
      products.push(new Beverage(name, quantity, price, fluidOZ, mainFlavor))
      next()
    })
    .catch(err => console.log(err))
}

const menu = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What kind of item do you want to make?',
      choices: ['product', 'food', 'beverage']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the item?'
    },
    {
      type: 'number',
      name: 'quantity',
      message: 'What is the quantity of the item?'
    },
    {
      type: 'number',
      name: 'price',
      message: 'What is the price of the item?'
    }
  ])
    .then(product => {
      switch (product.type) {
        case 'product':
          products.push(new Product(product.name, product.quantity, product.price))
          next()
          break
        case 'food':
          makeFood(product)
          break
        case 'beverage':
          makeBeverage(product)
          break
      }
    })
    .catch(err => console.log(err))
}

menu()

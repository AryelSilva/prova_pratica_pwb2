const express = require('express')
const ProductsController = require('./controller/ProductsController')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Olá Mundo')
})

routes.get('/products', ProductsController.index)
routes.get('/products/:id', ProductsController.findByid)
routes.post('/products', ProductsController.store)
routes.delete('/products/:id', ProductsController.delete)
routes.put('/products/', ProductsController.update)





module.exports = routes;
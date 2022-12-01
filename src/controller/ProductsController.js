const { update } = require('../model/Products');
const Products = require('../model/Products')

module.exports = {
    async index(req,res){
        const products = await Products.findAll(); //listar todos os dados / select * from prodducts
        return res.json(products)
        //função retorna todos o dados
    },

    async findByid(req,res){
        const { id } = req.params;
        const products = await Products.findAll({
            where: {
                id: id 
            }
        }); //listar todos os dados / select * from prodducts
        return res.json(products)
        //função retorna todos o dados
    },

    async store(req,res){
        const { name, price } = req.body;
        const products = await Products.create({
            name, price
        }); //listar todos os dados / select * from prodducts
        return res.json(products)
        //função retorna todos o dados
    },

    async delete(req,res){
        const { id } = req.params;
        const products = await Products.destroy({
            where: {
                id: id 
            }
        }); //listar todos os dados / select * from prodducts
        return res.json(products)
        //função retorna todos o dados
    },

    async update(req,res){
        const { id, name, price } = req.body;
        const products = await Products.update({
            name, price
        }, {
            where: {
                id: id
            }
        }); //listar todos os dados / select * from prodducts
        return res.json(products)
        //função retorna todos o dados
    },
}

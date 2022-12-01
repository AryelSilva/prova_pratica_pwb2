const { Model, DataTypes } = require('sequelize')

class Products extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL
        }, {
            sequelize
        })
    }
}

module.exports = Products;
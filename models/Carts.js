module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Carts", {
        cartID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Cart;
}
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Categorys", {
        categoryID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Category.associate = (models) => {
        Category.hasMany(models.Products, {
            onDelete: "cascade"
        });
    }
    return Category;
}
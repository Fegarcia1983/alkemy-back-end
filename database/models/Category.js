module.exports = (sequelize, types) => {
    /*=====================================
    =>         ALIAS DECLARATION         <=
    =====================================*/
    let alias = `Categories`;

    /*=====================================
    =>        COLUMNS DECLARATION        <=
    =====================================*/
    let columns = {
        id: {
            type: types.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unSigned: true
        },
        name: {
            type: types.STRING,
            allowNull: false,
            unique: true
        }
    };

    /*=====================================
    =>         MAIN CONFIGURATIONS       <=
    =====================================*/
    let config = {
        tableName: `categories`,
        timestamps: true,
        paranoid: true,
        underscored: true,
    };
    const Category = sequelize.define(alias, columns, config);

    /*=====================================
    =>         MODEL ASSOCIATIONS        <=
    =====================================*/
    Category.associate = (models) => {
        Category.hasMany(models.Registers, {
            as: `registers`,
            foreignKey: `category_id`,
            onDelete: `cascade`,
            hooks: true
        });
    };
    return Category;
};
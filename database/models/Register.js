module.exports = (sequelize, types) => {
    /*=====================================
    =>         ALIAS DECLARATION         <=
    =====================================*/
    let alias = `Registers`;

    /*=====================================
    =>        COLUMNS DECLARATION        <=
    =====================================*/
    let columns = {
        id: {
            type: types.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        in_out : {
            type: types.BOOLEAN,
            allowNull: false
        },
        date: {
            type: types.DATE,
            allowNull: false
        },
        concept: {
            type: types.STRING,
            allowNull: false,
            unique: false
        },
        mount: {
            type: types.DOUBLE,
            allowNull: false,
            unSigned: true
        },
        category_id: {
            type: types.BIGINT,
            unSigned: true
        }
    };

    /*=====================================
    =>         MAIN CONFIGURATIONS       <=
    =====================================*/
    let config = {
        tableName: `registers`,
        timestamps: true,
        paranoid: true,
        underscored: true,
    };
    const Register = sequelize.define(alias, columns, config);

    /*=====================================
    =>         MODEL ASSOCIATIONS        <=
    =====================================*/
    Register.associate = (models) => {
        Register.belongsTo(models.Categories, {
            as: `categories`,
            foreignKey: `category_id`
        });
    };
    return Register;
};
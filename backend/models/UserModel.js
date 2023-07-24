import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize


    const User = db.define('users', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    export default User;

// const User = db.define('users', {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     gender: DataTypes.STRING,
    
// }, {
//     freezeTableName: true
// })

// export default User

// (async() => {
//     await db.sync({force: true})
// })
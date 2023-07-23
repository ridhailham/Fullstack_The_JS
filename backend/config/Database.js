// import {Sequelize} from "sequelize"

// const config = {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOSTNAME,
//     port: process.env.DB_PORT,
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
// }

// const db = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     {
//         host: config.host,
//         port: config.port,
//         dialect: config.dialect,

//         pool: {
//             max: config.pool.max,
//             min: config.pool.min,
//             acquire: config.pool.acquire,
//             idle: config.pool.idle
//         }
//     }
// )



// export default db

import {Sequelize}  from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
})

export default db
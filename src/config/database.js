require('dotenv').config()
console.log(process.env.DB_HOST)
module.exports = {
    // dialect: 'postgres',
    // host: 'localhost',
    // username: 'postgres',
    // password: 't3f0x36583625',
    // database: 'ToDoApp',
    // define: {
    //     timestamps: false,
    //     freezeTableName: true,
    //     underscored: true,
    // },
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: true,
    define: {
        timestamps: true,
        freezeTableName: true,
        underscored: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        },
        keepAlive: true
    },
}
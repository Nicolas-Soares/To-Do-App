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
    host: 'ec2-52-6-77-239.compute-1.amazonaws.com',
    username: 'crwdttykteusle',
    password: '5d445c5a7954f35c58f73c1f5475b776ff4f4022f4ec876e56aca3896b452aa8',
    database: 'ddl0nnorqbf7hg',
    define: {
        timestamps: true,
        freezeTableName: true,
        underscored: true,
    },
    dialectOptions: {
        ssl: {
            require: true, rejectUnauthorized: false
        },
        keepAlive: true
    },
    ssl: true,
}
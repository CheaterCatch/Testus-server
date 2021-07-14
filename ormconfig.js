const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy

module.exports = {
    "type": "mysql",
    "host": "develop-catcher-db.cuplkaqohecx.ap-northeast-2.rds.amazonaws.com",
    "port": 3306,
    "username": "catcher",
    "password": "catcher5",
    "database": "catcherdb",
    "synchronize": true,
    "logging": true,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    namingStrategy: new SnakeNamingStrategy()
}
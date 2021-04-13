---
title: "SQL Configuration"
date: 2021-04-12
weight: 200
menu:
    main:
        parent: Tyk Gateway
url: "/sql-configuration"
---

Tyk supports SQL engine **natively**. This means Tyk have support for desired SQL rational database to be used instead of default MongoDB and let users to decide which DB type is the best for their usage.

While our SQL engine does not depend on database specific functionalities and can work with any SQL database, at the moment we officially support and test only Postgres and SQLite databases. SQLite can be used only for development environments.

Previously dashboard was using single mongo database for all the data.
Now Dashboard has three data storage layers, which can be configured separately (new configuration options).
- `config_storage` - Configuration storage (APIs, Policies, Users, User Groups, etc.)
- `log_analytics_storage` - Log storage (Log browser page) -
- `analytics_storage` - Analytics storage (used for display all the charts and for all analytics screens)

Which means that if you want you can have dashboard configuration in mongo, but analytics in postgress.
Or have configuration in SQLite but analytics use AWS Redshift, or another specialised SQL compatible database.
By default Log storage and Analytics storage will use Configuration storage, if you not set them in config.

Note that if legacy "mongo_url" in root config is set, it will use "legacy" mode, and will ignore config_storage section.


### Postgres
```
"config_storage": {
  "type": "postgres",
  "dsn": "user=root password=admin host=127.0.0.1 port=49691 sslmode=require"
}
```
Or set the following ENV vars:
```
TYK_DB_CONFIGSTORAGE_TYPE="postgres"
TYK_DB_CONFIGSTORAGE_SQLDSN="user=root password=admin host=127.0.0.1 port=49691 sslmode=require"
TYK_DB_MONGOURL=""
```
### SQLite
For SQLite you can omit DSN option, and it will use in-memory engine.
```
"config_storage": {
  "type": "sqlite",
  "dsn": "./test.db"
}
```
Or set the following ENV vars:
```
TYK_DB_CONFIGSTORAGE_TYPE="sqlite" TYK_DB_MONGOURL=""
```

### MySQL
```
"config_storage": {
  "type": "mysql",
  "dsn": "gorm:gorm@tcp(127.0.0.1:3306)/gorm?charset=utf8&parseTime=True&loc=Local"
}
```

### Mongo
```
"config_storage": {
  "type": "mongo",
  "mongo": {
     "url": "mongodb://127.0.0.1:27017/schema_name"
  }
}
```

## Tyk Pump

Addeddd two new pumps: `sql` and `sql_aggregate`.
From configuration point of view they behave similar to the dashboard.

```
"sql": {
    "name": "sql",
    "meta": {
       "type": "sqlite",
       "dsn": "/tmp/test.db"
    }
},
"sql_aggregate": {
    "name": "sql_aggregate",
    "meta": {
        "type": "sqlite",
        "dsn": "/tmp/test.db"
    }
}
```

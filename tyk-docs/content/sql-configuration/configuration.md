---
title: "SQL Configuration"
tags: ["SQL", "Postgres", "SQLite", "Database Configuration"]
description: "How to configure Tyk to use Postgres or SQLite"
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

```
{
  "storage": {
    "main":{},
    "analytics":{},
    "logs":{},
  }
}
```

- `main` - Main storage (APIs, Policies, Users, User Groups, etc.)
- `analytics` - Analytics storage (used for display all the charts and for all analytics screens)
- `logs` - Logs storage (log browser page) -

Which means that if you want you can have dashboard configuration in mongo, but analytics in postgress.
Or have configuration in SQLite but analytics use AWS Redshift, or another specialised SQL compatible database.
By default Logs storage and Analytics storage will use Main storage, if you not set them in config.

Note that if legacy `mongo_url` in root config is set, it will use "legacy" mode, and will ignore `main` storage section.

### Postgres

```
"storage": {
  "main": {
    "type": "postgres",
    "connection_string": "user=root password=admin host=127.0.0.1 port=49691 sslmode=require"
  }
}
```

Or set the following ENV vars:

```
TYK_DB_STORAGE_MAIN_TYPE="postgres"
TYK_DB_STORAGE_MAIN_CONNECTIONSTRING="user=root password=admin host=127.0.0.1 port=49691 sslmode=require"
TYK_DB_MONGOURL=""
```

### SQLite

For SQLite you can omit `connection_string` option, and it will use in-memory engine.

```
"storage": {
  "main": {
    "type": "sqlite",
    "connection_string": "./test.db"
  }
}
```

Or set the following ENV vars:

```
TYK_DB_STORAGE_MAIN_TYPE="sqlite" TYK_DB_STORAGE_MAIN_CONNECTIONSTRING=""
```

### MySQL

```
"storage": {
  "main": {
    "type": "mysql",
    "connection_string": "gorm:gorm@tcp(127.0.0.1:3306)/gorm?charset=utf8&parseTime=True&loc=Local"
  }
}
```

### Mongo

```
"storage": {
  "main": {
    "type": "mongo",
    "connection_string": "mongodb://127.0.0.1:27017/schema_name",
    "mongo": {
      "ssl": {
        "enabled": true,
        "insecure_skip_verify": true,
        ...
      },
      "batch_size": 1
    }
  }
}
```

## Logs

We support proper logs (for `main`, `analytics` and `logs` storages); you may lookup more detials inside and look up for lines like the following:

```
[Apr 15 17:33:34]  INFO Initializing Main storage with `postgres` database
[Apr 15 17:33:34]  INFO Initializing Analytics storage with `sqlite` database
[Apr 15 17:33:34]  INFO Initializing Logs storage with `mongo` database
```

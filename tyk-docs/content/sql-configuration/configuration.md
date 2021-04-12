---
title: "SQL Configuration"
date: 2021-04-12
weight: 200
menu:
    main:
        parent: Tyk Gateway
url: "/sql-configuration"
---

Tyk supports SQL engine **natively**. This means Tyk have support for desired SQL rational database to be used instead of defaul MongoDB and let users to decide which DB type is the best for their usage.

Now you can use SQL engine to store dashboard configuration (no analytics support yet, mongo still required, work in progress).

Example with different SQL egines following (also works with all compatible dbs).
## Postgres
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
## SQLite
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

Command line commad for running analytics in such meaner is the following

```
go build -i && TYK_DB_CONFIGSTORAGE_TYPE="sqlite" TYK_DB_CONFIGSTORAGE_SQLDSN="/tmp/test.db"
TYK_DB_MONGOURL="" TYK_DB_LOGANALYTICSSTORAGE_TYPE="mongo"
TYK_DB_LOGANALYTICSSTORAGE_MONGO_MONGOURL="mongodb://127.0.0.1:27017/tyk_analytics"
TYK_DB_ANALYTICSSTORAGE_SQLDSN="/tmp/test.db"
TYK_DB_ANALYTICSSTORAGE_TABLESHARDING=true TYK_LOGLEVEL=debug
./tyk-analytics --conf ../tyk-develop-env/confs/tyk_analytics.conf
```

## MySQL
```
"config_storage": {
  "type": "mysql",
  "dsn": "gorm:gorm@tcp(127.0.0.1:3306)/gorm?charset=utf8&parseTime=True&loc=Local"
}
```

## Mongo
```
"config_storage": {
  "type": "mongo",
  "mongo": {
     "url": "..."
  }
}
```
Note that if legacy "mongo_url" in root config is set, it will use "legacy" mode, and will ignore config_storage section.
Analytics in this build will not work.



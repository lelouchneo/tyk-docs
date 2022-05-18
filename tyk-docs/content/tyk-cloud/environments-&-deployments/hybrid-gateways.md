---
title: "Managing Hybrid Gateways"
date: 2021-03-29
tags: ["Tyk Cloud", "Hybrid", "Gateways"]
description: "How to configure Hybrid Gateways with our 14 Day Free Trial or Enterprise Global plans"
menu:
  main:
    parent: "Environments & Deployments"
weight: 5
---

## Introduction

Hybrid Gateways are available on our [14 Day Free Trial](/docs/tyk-cloud/account-billing/plans/#14-day-trial) and [Enterprise Global](/docs/tyk-cloud/account-billing/plans/#enterprise-global-plan) plans. Below is a sample Tyk Hybrid Gateway configuration file.

{{< note success >}}
**Note**

For Tyk Cloud trial accounts, the MDCB endpoint serves a self signed certificate by default and we replace it with a public certificate during account onboarding.
{{< /note >}}

### Sample Hybrid Gateway Configuration File

```.copyWrapper
{
    "listen_port": 8081,
    "template_path": "./templates",
    "tyk_js_path": "./js/tyk.js",
    "middleware_path": "./middleware",
    "use_db_app_configs": false,
    "app_path": "./apps/",
    "storage": {
        "type": "redis",
        "host": "localhost",
        "port": 6379,
        "enable_cluster": false,
        "username": "",
        "password": "",
        "database": 0,
        "optimisation_max_idle": 1000
    },
    "enable_analytics": true,
    "analytics_config": {
        "type": "rpc",
        "csv_dir": "/tmp",
        "mongo_url": "",
        "mongo_db_name": "",
        "mongo_collection": "",
        "purge_delay": -1,
        "ignored_ips": []
    },
    "auth_override": {
        "force_auth_provider": true,
        "auth_provider": {
            "name": "",
            "storage_engine": "rpc",
            "meta": {}
        }
    },
    "slave_options": {
        "use_rpc": true,
        "rpc_key": "your org id",
        "api_key": "your api key",
        "connection_string": "your endpoint here",
        "use_ssl": true,
        "ssl_insecure_skip_verify": true,
        "rpc_pool_size": 20,
        "enable_rpc_cache": true,
        "bind_to_slugs": false
    },
    "health_check": {
        "enable_health_checks": false,
        "health_check_value_timeouts": 60
    },
    "optimisations_use_async_session_write": true,
    "enable_non_transactional_rate_limiter": true,
    "enable_sentinel_rate_limiter": false,
    "allow_master_keys": false,
    "policies": {
        "policy_source": "rpc",
        "policy_record_name": "tyk_policies"
    },
    "hash_keys": true,
    "hash_key_function": "murmur128",
    "close_connections": false,
    "http_server_options": {
        "enable_websockets": true,
        "use_ssl": false,
        "server_name": "*",
        "min_version": 771,
        "certificates": [{
            "domain_name": "*",
            "cert_file": "/etc/certs/cert.pem",
            "key_file": "/etc/certs/key.pem"
        }]
    },
    "allow_insecure_configs": true,
    "enable_jsvm": true,
    "enable_context_vars": true,
    "coprocess_options": {
        "enable_coprocess": true,
        "coprocess_grpc_server": ""
    },
    "enable_bundle_downloader": false,
    "bundle_base_url": "",
    "global_session_lifetime": 100,
    "force_global_session_lifetime": false,
    "max_idle_connections_per_host": 500,
    "enable_custom_domains": true
}
```
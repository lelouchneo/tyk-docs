---
title: "How to Connect to DocumentDB with x509 client cert"
date: 2020-03-26T10:32:49Z
menu:
  main:
    parent: "Frequently Asked Questions"
weight: 0
---

As AWS DocumentDB runs with TLS enabled, we require a way to run it without disabling the TLS verification.
DocumentDB uses self-signed certs for verification, and provides a bundle with root certificates for this purpose, so we need a way to load this bundle.
Additionally DocumentDB can't be exposed to the local machine outside of the Amazon Virtual Private Cloud (VPC), which means that even if verification is turned on, it will always fail since if we use a SSH tunnel or a similar method, the domain will differ from the original. Also, it can have [Mutual TLS](/docs/basic-config-and-security/security/tls-and-ssl/mutual-tls/) enabled.

So, in order to support it, we provide the following variables for both our [Tyk Analytics Dashboard](/docs/tyk-configuration-reference/tyk-dashboard-configuration-options/) and [Tyk Pump](/docs/tyk-configuration-reference/tyk-pump-configuration/):

- `ca_file` - path to the PEM file with trusted root certificates
- `key_file` - path to the PEM file which contains both client certificate and private key. This is required for Mutual TLS.
- `allow_invalid_hostnames` - ignore hostname check when it differs from the original (for example with SSH tunneling). The rest of the TLS verification will still be performed.

A working DocumentDB configuration looks like this (assuming that there is SSH tunnel, proxying to 27018 port).

```{.json}
"storage": {
  "main": {
    "mongo": {
      "url": "mongodb://testest:testtest@127.0.0.1:27018/tyk_analytics?connect=direct",
      "ssl": {
        "enabled": true,
        "insecure_skip_verify": false,
        "ca_file": "<path to>/rds-combined-ca-bundle.pem",
        "allow_invalid_hostnames": true,
        "key_file": "<path to>/key_file",
      }
      "batch_size": 2000
    }
  }
}
```

### Capped Collections

If you are using DocumentDB, [capped collections](/docs/analytics-and-reporting/capping-analytics-data-storage/) are not supported. See [here](https://docs.aws.amazon.com/documentdb/latest/developerguide/mongo-apis.html) for more details.

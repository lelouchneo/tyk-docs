---
title: "Redis Installation"
date: 2022-12-13
tags: ["Tyk Gateway", "Redis Installation", "Installation", "hybrid gateway"]
description: "How to install redis using helm charts"
menu:
main:
parent: "Open Source Installation" # Child of APIM -> OSS
weight: 3
url: "/tyk-oss/redis-installation/"
---


### Installing Redis


#### Recommended: via *Bitnami* chart

You can first add and update the rather excellent helm chart provided by bitnami
For Redis you can use these rather excellent chart provided by Bitnami.

```bash
helm install tyk-redis bitnami/redis -n tyk
```

Follow the notes from the installation output to get connection details and password.

```
  Redis(TM) can be accessed on the following DNS names from within your cluster:

    tyk-redis-master.tyk.svc.cluster.local for read/write operations (port 6379)
    tyk-redis-replicas.tyk.svc.cluster.local for read-only operations (port 6379)

  export REDIS_PASSWORD=$(kubectl get secret --namespace tyk tyk-redis -o jsonpath="{.data.redis-password}" | base64 --decode)
```

The DNS name of your Redis as set by Bitnami is `tyk-redis-master.tyk.svc.cluster.local:6379`
You can update them in your local `values.yaml` file under `redis.addrs` and `redis.pass`
Alternatively, you can use `--set` flag to set it in Tyk installation. For example  `--set redis.pass=$REDIS_PASSWORD`

#### Evaluation only: via *simple-redis* chart

{{< warning  success >}}
**Warning**

Another option for Redis, to get started quickly, is to use our *simple-redis* chart.
Please note that these provided charts must never be used in production or for anything
but a quick start evaluation only. Use Bitnami redis or Official Redis Helm chart in any other case.
We provide this chart, so you can quickly deploy *Tyk gateway*, but it is not meant for long term storage of data.

{{< /warning >}}

```bash
helm install redis tyk-helm/simple-redis -n tyk
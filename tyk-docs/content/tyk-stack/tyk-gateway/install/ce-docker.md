---
title: "Docker"
date: 2021-01-20
tags: ["Tyk Gateway", "Open Source", "Installation", "Docker"]
description: "How to install the open source Tyk Gateway using Docker Compose or as Docker Standalone"
menu:
  main:
    parent: "Getting Started " # Child of APIM -> OSS
weight: 1
url: "/tyk-oss/ce-docker/"

---

We will show you two methods of installing our Community Edition Gateway on Docker.

The quickest way to get started is using docker-compose.  Visit our [Dockerhub](https://hub.docker.com/u/tykio/) to view the official images.

The following are required for a Tyk OSS installation:
 - Redis   - required for all Tyk installations.
             Simple redis installation instructions are included below.
 - MongoDB - Required only if you chose to use the MongoDB Tyk pump with your Tyk OSS installation. Same goes with any
             [other pump](/analytics-and-reporting/other-data-stores/) you choose to use.
             
{{< tabs_start >}}
{{< tab_start "Docker Compose" >}}


<br>
1. clone the docker-compose repository

```bash
$ git clone https://github.com/TykTechnologies/tyk-gateway-docker
Cloning into 'tyk-gateway-docker'...
```

2. `cd` into the directory
```.bash
$ cd tyk-gateway-docker
```

3. Run Tyk Gateway and Redis.  We can pass `-d` flag to run the processes in the background.
```.bash
$ docker-compose up
```
{{< tab_end >}}
{{< tab_start "Docker Standalone" >}}

<br>
1. Let's create a network

```.bash
$ docker network create tyk
ab1084d034c7e95735e10de804fc54aa940c031d2c4bb91d984675e5de2755e7
```

2. Deploy Redis into the network, with the `6379` port open
```.bash
$ docker run -itd --rm --name redis --network tyk -p 127.0.0.1:6379:6379 redis:4.0-alpine
ea54db4da4b228b7868449882062a962f75a7b2d43cdb0ac5205fb4ccdbcde23
```


3. Next, let's download a JSON `tyk.conf` configuration file. 

```.bash
$ wget https://raw.githubusercontent.com/TykTechnologies/tyk-gateway-docker/master/tyk.standalone.conf
...
2021-01-28 13:05:22 (6.81 MB/s) - ‘tyk.standalone.conf’ saved [1563/1563]
```

4. Run the Gateway, mounting the conf file into the container:
```.bash
$ docker run \
  --name tyk_gateway \
  --network tyk \
  -p 8080:8080 \
  -v $(pwd)/tyk.standalone.conf:/opt/tyk-gateway/tyk.conf \
  -v $(pwd)/apps:/opt/tyk-gateway/apps \
  docker.tyk.io/tyk-gateway/tyk-gateway:latest
```

{{< tab_end >}}
{{< tabs_end >}}

You're done! Your Tyk Gateway is configured and ready to use.

```.bash
$ curl localhost:8080/hello
{"status":"pass","version":"v3.0.3","description":"Tyk GW"}
```

## Next Steps Tutorials

Follow the Tutorials on the Community Edition tabs for the following:

1. [Add an API](/docs/getting-started/tutorials/create-api/)
2. [Create a Security Policy](/docs/getting-started/tutorials/create-security-policy/)
3. [Create an API Key](/docs/getting-started/tutorials/create-api-key/)